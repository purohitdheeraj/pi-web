"use client";
import Chat from "@/components/Chat";
import { ChatMessages } from "@/components/ChatMessage";
import { useChatContext } from "@/context/ChatContext";


export default function Home() {
  const { messages } = useChatContext();
  
  return (
    <>
      <div className='mx-auto w-full flex-grow flex flex-col max-w-[844px] px-4 relative h-full overflow-y-auto'>
        <ChatMessages messages={messages} />
        <div>
          <Chat/>
        </div>
      </div>
    </>
  );
}