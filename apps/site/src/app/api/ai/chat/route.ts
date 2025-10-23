import { google } from "@/lib/ai/utils";
import { convertToModelMessages, streamText, UIMessage } from "ai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json()
  
  const result = await streamText({
    model: google('gemini-2.5-flash-lite-preview-09-2025'),
    messages: convertToModelMessages(messages),
    system: "You are a helpful assistant. Respond in Swedish."
  })

  return result.toUIMessageStreamResponse()
}
