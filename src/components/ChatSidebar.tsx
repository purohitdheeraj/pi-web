"use client";
import useAutosizeTextArea from "../hooks/use-autosize-textarea";
import { useRef, useState, useEffect } from "react";
import Topics from '@/components/Topics';
import HistoryCard from "@/components/HistoryCard";


const ChatSidebar = () => {
  const [value, setValue] = useState("");
  const [greeting, setGreeting] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return "Good morning";
    } else if (hours < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);  
  
  return (
    <>
      <div className='w-full lg:w-[380px] lg:border-r text-2xl overflow-y-scroll no-scrollbar border-r p-8 h-[100vh] bg-border/30 lg:pt-8 gap-2'>
          <h2>
            {greeting}, 
            <span className='italic ml-1'>
              Mani
            </span>
          </h2>

          <HistoryCard />

          <Topics />
        </div>
    </>
  )
}

export default ChatSidebar