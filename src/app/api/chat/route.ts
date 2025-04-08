import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, message, model } = body;

    const response = await fetch("https://api.two.ai/v2/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SUTRA_API_KEY}`,
      },
      body: JSON.stringify({
        model: model ?? "sutra-v2",
        messages: [...messages, { role: "user", content: message }],
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
