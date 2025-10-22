import { google } from "@/lib/ai/utils";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";

export async function POST(request: NextRequest) {
    await generateImage();
    return NextResponse.json({ message: "Image generated" });
}

const generateImage = async () => {
    const result = await generateText({
        model: google("gemini-2.5-flash-image-preview"),
        prompt: "Generate an image of a banana wearing a costume",
    })

    // Save generated image
    for (const file of result.files) {
    if (file.mediaType.startsWith('image/')) {
      const timestamp = Date.now();
      const fileName = `generated-${timestamp}.png`;

      fs.mkdirSync('output', { recursive: true });
      await fs.promises.writeFile(`output/${fileName}`, file.uint8Array);

      console.log(`Generated and saved image: output/${fileName}`);
    }
  }
}
