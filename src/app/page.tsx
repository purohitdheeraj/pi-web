"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, User } from 'lucide-react';
import { VolumeX } from 'lucide-react';
import useAutosizeTextArea from "../hooks/use-autosize-textarea";
import { useRef, useState } from "react";
import Chat from '@/components/Chat';
import Topics from '@/components/Topics';
import Image from 'next/image';
import chat from '../../public/assets/chat.svg';



export default function Home() {

  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;
  
  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    console.log(val)

    setValue(val);

  };


  return (
    <>
    <div className='flex  flex-wrap alpina h-full overflow-y-auto'>
      <div className='w-full lg:w-[380px] lg:border-r text-2xl overflow-y-scroll no-scrollbar border-r p-8  h-[100vh] bg-border/30   lg:pt-8 gap-2 '>
        <h2>
        Good evening, 
        
        <span className='italic'>
          Mani
        </span>
        </h2>

        <div className="mb-6 flex items-center rounded-xl border border-white bg-white/30 p-4  shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a] transition-all duration-150 hover:scale-95 hover:bg-background/95 mt-6">
        
        <div className="pr-4 shrink-0">
        <Image src={chat} alt='Chat' width={56} height={56}/>
        </div>
        
        <div><h2 className="font-condensed text-h-m text-primary-700">Download your Pi conversation history</h2><a className="mt-4 text-sm geist-sans block text-secondary" href="/profile/manage-history">Manage history</a></div></div>

        <Topics/>
      </div>
      
      <div className=' mx-auto w-full flex-grow flex flex-col  max-w-[844px] px-4 relative h-full overflow-y-auto'>
      <div className="absolute top-0 left-0 right-0 h-16 blur-sm  bg-gradient-to-b z-40 from-background to-background/50 "></div>

        <Chat/>
      </div>  
    </div>  
    </>
  );
}



