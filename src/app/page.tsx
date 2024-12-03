"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, User } from 'lucide-react';
import { VolumeX } from 'lucide-react';
import useAutosizeTextArea from "../hooks/use-autosize-textarea";
import { useRef, useState } from "react";
import Chat from '@/components/Chat';



export default function Home() {

  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    console.log(val)

    setValue(val);
  };


  return (
    <>
    <div className='flex min-h-dvh flex-wrap alpina'>
      <div className='w-full lg:w-[375px] lg:shrink-0 lg:border-r text-2xl flex flex-col border-r p-8 alpina'>
        hare krishna

      </div>
      <div className=' mx-auto flex-grow flex flex-col  max-w-[844px] px-4'>
        <Chat/>
      </div>  
    </div>  
    </>
  );
}



