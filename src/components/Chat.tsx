"use client";

import { useChatContext } from "@/context/ChatContext";
import { ChatInput } from "./ChatInput";
import { useState } from "react";

export default function Chat() {
  const { messages, addMessage } = useChatContext();
  const [model, setModel] = useState("sutra-v2");

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
          model
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

        <div className="mb-4 max-w-xs">

          <label htmlFor="model-select" className="block text-sm font-medium text-gray-700">
            Select Model
          </label>

          <select
            id="model-select"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            <option value="sutra-v2">sutra-v2</option>
            <option value="sutra-r0">sutra-r0</option>
          </select>
        </div>

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
    </div >
  );
}
