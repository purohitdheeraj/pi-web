"use client";

import { useState, useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import classNames from "classnames";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; 
      textarea.style.height = `${textarea.scrollHeight}px`; 

      const maxHeight = 150; 
      if (textarea.scrollHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`;
        textarea.style.overflowY = "auto";
      } else {
        textarea.style.overflowY = "hidden";
      }
    }
  }, [value]);

  const handleSend = () => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      onSend(trimmedValue);
      setValue("");
    }
  };

  const handleKeyPress = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === "Enter" && !evt.shiftKey) {
      evt.preventDefault();
      handleSend();
    }
  };

  return (
      <div
        className={classNames(
          "flex items-end gap-2 w-full min-h-6 bg-white rounded-[30px] px-6 py-2 transition-shadow duration-200"
        )}
      >
        <Textarea
          ref={textareaRef}
          className="flex-grow text-2xl outline-none shadow-none h-auto resize-none bg-white overflow-hidden"
          rows={1}
          placeholder="Talk with Pi"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
          value={value}
        />

        <Button
          variant={"ghost"}
          aria-label="Submit text"
          disabled={!value.trim()}
          onClick={handleSend}
          className={classNames(
            "flex shrink-0 items-center border-thin justify-center rounded-full p-2.5 transition-colors duration-500 mb-1",
            {
              "bg-secondary text-white hover:bg-secondary hover:text-white":
                value.trim(),
              "bg-secondary-foreground/10 text-neutral-600": !value.trim(),
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
  );
};
