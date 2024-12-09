"use client";

import { useRef, useEffect, useMemo } from "react";
import { Fade } from "react-awesome-reveal";

interface ChatMessagesProps {
  messages: { role: string; content: string }[];
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [messages]);

  const messagesMemo = useMemo(
    () =>
      messages.map((message, index) => (
        <div
          key={index}
          className={`flex whitespace-pre-wrap items-start ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-3 rounded-lg ${
              message.role === "user"
                ? "max-w-[70%] bg-primary-foreground/5"
                : "max-w-[100%]"
            }`}
          >
            {message.content}
          </div>
        </div>
      )),
    [messages]
  );

  return (
    <div
      ref={chatContainerRef}
      className="relative min-h-52 h-52 mt-4 text-[22px] w-full flex flex-col overflow-y-auto no-scrollbar pt-16 flex-grow space-y-4 px-4 border-t-transparent"
    >
      <Fade triggerOnce>{messagesMemo}</Fade>
    </div>
  );
};
