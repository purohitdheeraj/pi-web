"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, User } from 'lucide-react';
import { VolumeX } from 'lucide-react';
import useAutosizeTextArea from "../hooks/use-autosize-textarea";
import { useRef, useState } from "react";



export default function Home() {

  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    console.log(val)

    setValue(val);
  };


  return (
    <>
    <div className='flex min-h-dvh'>
      <div className='w-full lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300 flex flex-col border p-8'>

        Sidebar

      </div>
      <div className=' mx-auto flex-grow flex flex-col py-8 max-w-[712px]'>
        <div className='mt-auto'>
            
        <div className='flex items-end gap-2 w-full min-h-6 shadow-md bg-white rounded-[30px] px-6 py-2'>
          <Textarea
            className='flex-grow outline-none  shadow-none h-full resize-none  bg-white overflow-hidden  text-[16px]'
            rows={1}
            placeholder='Talk with Pi'
            onChange={handleChange}
            ref={textAreaRef}
            value={value}
          />
      
          <button aria-label="Submit text" className="flex border items-center justify-center rounded-full text-neutral-600 bg-neutral-50 p-1.5  transition-colors duration-300 mb-1" type="button" ><svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="currentColor"><path  d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z" clipRule="evenodd"></path></svg></button>
        </div>
        </div>

        <div className="px-5 py-6 w-full text-sm mx-auto max-w-1.5xl 2xl:max-w-[47rem]"><div><div className="t-label mx-auto text-center text-primary-foreground">By using Pi, you agree to our <a href="/terms" target="_blank" className="text-primary-600 underline text-secondary">Terms</a> and <a href="/privacy" target="_blank" className="text-primary-600 underline text-secondary">Privacy Policy</a>.</div></div></div>
      </div>  
    </div>  
    </>
  );
}



