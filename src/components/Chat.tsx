"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";

function Chat() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hey there, great to meet you. I'm Pi, your personal AI.\n\n My goal is to be useful, friendly, and fun. Ask me for advice, for answers, or let's talk about whatever's on your mind.\n\n How's your day going?`,
    },
  ]);

  // Reference to the chat container
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever the messages array is updated
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(evt.target?.value);
  };

  const handleSend = async () => {
    if (!value.trim()) return; 
  
    // Add the user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: value.trim() },
    ]);
  
    setValue(""); 
  
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_API_KEY}`, 
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", 
          messages: [
            ...messages, 
            { role: "user", content: value.trim() },  
          ],
        }),
      });
  
      const data = await res.json();
      if (data.choices && data.choices[0]) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: data.choices[0].message.content }, 
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: "Sorry, I couldn't respond." },
        ]);
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Something went wrong. Please try again." },
      ]);
    }
  };
  
  

  const handleKeyPress = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === "Enter" && !evt.shiftKey) {
      evt.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="relative min-h-52 h-52 mt-4 text-[22px] w-full flex flex-col overflow-y-auto no-scrollbar pt-16 flex-grow space-y-4 px-4 border-t-transparent"
      >
        {messages.map((message, index) => (
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
        ))}
      </div>

      <br className="mt-4" />

      {/* Input Field */}
      <div className="mt-auto px-4 py-2">
        <div
          className={`flex items-end gap-2 w-full min-h-6 ${
            focused
              ? "border"
              : "shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a]"
          } bg-white rounded-[30px] px-6 py-2 transition-shadow duration-200`}
          onFocus={() => setFocused(true)}
          onMouseOver={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <Textarea
            className="flex-grow text-2xl outline-none shadow-none h-full resize-none bg-white overflow-hidden "
            rows={1}
            placeholder="Talk with Pi"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            ref={textAreaRef}
            value={value}
          />

          <Button
            variant={"ghost"}
            aria-label="Submit text"
            disabled={!value.trim()}
            onClick={handleSend}
            className={`flex shrink-0 ${
              value.trim()
                ? "bg-secondary text-white hover:bg-secondary hover:text-white"
                : "bg-secondary-foreground/10 text-neutral-600"
            } items-center border-thin justify-center rounded-full p-2.5 transition-colors duration-500 mb-1`}
          >
            <ArrowUp height={16} width={16} className="shrink-0" strokeWidth={3} />
          </Button>
        </div>
      </div>

      {/* Terms */}
      <div className="px-5 mt-4 py-6 w-full geist-sans text-sm mx-auto max-w-1.5xl 2xl:max-w-[47rem]">
        <div>
          <div className="t-label mx-auto text-center text-primary-foreground">
            By using Pi, you agree to our{" "}
            <a href="/terms" target="_blank" className="text-primary-600 underline text-secondary">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy" target="_blank" className="text-primary-600 underline text-secondary">
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
