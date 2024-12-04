"use client";
import { useState, useEffect } from "react";
import Topics from "@/components/Topics";
import HistoryCard from "@/components/HistoryCard";
import { X , Sparkles} from 'lucide-react';
import { Button } from "./ui/button";

const ChatSidebar = () => {
  const [greeting, setGreeting] = useState<string>("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); 
  

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
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block w-[380px] border-r text-2xl overflow-y-scroll no-scrollbar p-8 h-[100vh] bg-border/30 gap-2">
        <h2 className="alpina-dense text-3xl">
          {greeting},
          <span className="italic ml-1">Mani</span>
        </h2>
        <HistoryCard />
        <Topics />
      </div>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div className="fixed overflow-auto no-scrollbar mt-4 inset-0 border shadow-lg bg-[#F7EFE3] rounded-l-2xl rounded-r-2xl z-50 p-6 pt-16 ">
          <Button
            variant="ghost"
            size="icon"
            className="absolute p-1 top-4 left-4 rounded-full"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
              <X fill="#0D3C26" strokeWidth={2.5}/>
          </Button>
          <h2 className="text-2xl mb-4">
            {greeting},
            <span className="italic ml-1">Mani</span>
          </h2>
          <HistoryCard />
          <Topics />
        </div>
      )}

      {/* Mobile Sidebar Trigger */}
      <Button
        className={` ${isMobileSidebarOpen ? 'hidden':''}  rounded-full lg:hidden fixed top-4 left-4 z-50`}
        variant="ghost"
        size="icon"
        onClick={() => setIsMobileSidebarOpen(true)}
      >
        <span>
        <Sparkles fill="#0D3C26" strokeWidth={1.5} />
        </span>
      </Button>
    </>
  );
};

export default ChatSidebar;
