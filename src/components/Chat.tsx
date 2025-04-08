"use client";

import { useChatContext } from "@/context/ChatContext";
import { ChatInput } from "./ChatInput";

export default function Chat() {
  const { messages, addMessage } = useChatContext();

  const handleSend = async (message: string) => {
    addMessage({ role: "user", content: message });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages,
          message,
        }),
      });

      const data = await res.json();

      addMessage({
        role: "assistant",
        content: data.choices?.[0]?.message?.content || "No response",
      });
    } catch (error) {
      console.error(error);
      addMessage({
        role: "assistant",
        content: "Something went wrong. Please try again.",
      });
    }
  };



  return (
    <div className="relative flex flex-col h-full w-full">
      <div className="mt-auto px-4 py-2 space-y-4">
        <ChatInput onSend={handleSend} />

        <div className="px-5 py-6 w-full geist-sans text-sm mx-auto max-w-1.5xl 2xl:max-w-[47rem]">
          <div>
            <div className="t-label mx-auto text-center text-primary-foreground">
              By using Pi, you agree to our{" "}
              <a
                href="https://pi.ai/policy#terms"
                target="_blank"
                className="text-primary-600 underline text-secondary"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="https://pi.ai/policy#privacy"
                target="_blank"
                className="text-primary-600 underline text-secondary"
              >
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
