import { google } from "@/lib/ai/utils";
import { streamText, UIMessage } from "ai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const userMessage = messages
    .filter(message => message.role === 'user')
    .pop()
  
  // Extract text from the last user message and make it the base prompt
  const prompt = userMessage?.parts
    ?.find(part => part.type === 'text')
    ?.text
  
  // Extract the last image file from the last user message
  const image = userMessage?.parts.find(part =>
    part.type === 'file' &&
    'url' in part &&
    typeof part.url === 'string' &&
    'mediaType' in part &&
    typeof part.mediaType === 'string' &&
    part.mediaType.startsWith('image/')
  ) as
    | ({ type: 'file'; url: string; mediaType?: string })
    | undefined;
  
  const result = await streamText({
    model: google('gemini-2.5-flash-image-preview'),
    providerOptions: {
      google: { responseModalities: ['TEXT', 'IMAGE'] },
    },
    prompt: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `${prompt}. Keep everything else the same. If you are going to respond a text, respond in Swedish.`,
          },
          ...(image?.url ? [{
            type: 'image' as const,
            image: new URL(image.url, req.url),
            mediaType: image.mediaType || 'image/jpeg',
          }] : []),
        ],
      },
    ],
  })

  return result.toUIMessageStreamResponse()
}
