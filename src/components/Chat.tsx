"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";
import classNames from "classnames";
import { Fade } from "react-awesome-reveal";

function Chat({ isTopicPage }: { isTopicPage?: boolean }) {
  const [chatState, setChatState] = useState({
    messages: [
      {
        role: "assistant",
        content: `Hey there, great to meet you. I'm Pi, your personal AI.\n\nMy goal is to be useful, friendly, and fun. Ask me for advice, for answers, or let's talk about whatever's on your mind.\n\nHow's your day going?`,
      },
    ],
    value: "",
  });

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const focusedRef = useRef(false);
  const isTopicRef = useRef(isTopicPage);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [chatState.messages]);

  // Adjust textarea height dynamically, with a max height
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight

      // Set a max height to prevent it from growing too large
      const maxHeight = 150; // Set your max height here (e.g., 150px)
      if (textarea.scrollHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`;
        textarea.style.overflowY = "auto"; // Enable scroll if exceeds maxHeight
      } else {
        textarea.style.overflowY = "hidden"; // Hide scroll if it's within the maxHeight
      }
    }
  }, [chatState.value]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    isTopicRef.current = false;
    setChatState((prev) => ({ ...prev, value: evt.target.value }));
  };

  const handleSend = async () => {
    const trimmedValue = chatState.value.trim();
    if (!trimmedValue) return;

    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, { role: "user", content: trimmedValue }],
      value: "",
    }));

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            ...chatState.messages,
            { role: "user", content: trimmedValue },
          ],
        }),
      });

      const data = await res.json();
      setChatState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: "assistant",
            content:
              data.choices?.[0]?.message?.content ||
              "Sorry, I couldn't respond.",
          },
        ],
      }));
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setChatState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: "assistant",
            content: "Something went wrong. Please try again.",
          },
        ],
      }));
    }
  };

  const handleKeyPress = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === "Enter" && !evt.shiftKey) {
      evt.preventDefault();
      handleSend();
    }
  };

  const messagesMemo = useMemo(
    () =>
      chatState.messages.map((message, index) => (
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
    [chatState.messages]
  );

  return (
    <div className="relative flex flex-col h-full w-full">
      {!isTopicPage && (
        <div
          ref={chatContainerRef}
          className="relative min-h-52 h-52 mt-4 text-[22px] w-full flex flex-col overflow-y-auto no-scrollbar pt-16 flex-grow space-y-4 px-4 border-t-transparent"
        >
          <Fade triggerOnce>{messagesMemo}</Fade>
        </div>
      )}

      <div className="mt-auto px-4 py-2">
        <div
          className={classNames(
            "flex items-end gap-2 w-full min-h-6 bg-white rounded-[30px] px-6 py-2 transition-shadow duration-200",
            {
              border: focusedRef.current,
              "shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a]":
                !focusedRef.current,
            }
          )}
          onFocus={() => (focusedRef.current = true)}
          onMouseOver={() => (focusedRef.current = true)}
          onBlur={() => (focusedRef.current = false)}
        >
          <Textarea
            ref={textareaRef}
            className="flex-grow text-2xl outline-none shadow-none h-auto resize-none bg-white overflow-hidden"
            rows={1}
            placeholder="Talk with Pi"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={chatState.value}
          />

          <Button
            variant={"ghost"}
            aria-label="Submit text"
            disabled={!chatState.value.trim()}
            onClick={handleSend}
            className={classNames(
              "flex shrink-0 items-center border-thin justify-center rounded-full p-2.5 transition-colors duration-500 mb-1",
              {
                "bg-secondary text-white hover:bg-secondary hover:text-white":
                  chatState.value.trim(),
                "bg-secondary-foreground/10 text-neutral-600":
                  !chatState.value.trim(),
              }
            )}
          >
            <ArrowUp
              height={16}
              width={16}
              className="shrink-0"
              strokeWidth={3}
            />
          </Button>
        </div>
      </div>

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
  );
}

export default Chat;
