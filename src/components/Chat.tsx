"use client";
import useAutosizeTextArea from "../hooks/use-autosize-textarea";
import { useRef, useState } from "react";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, User } from 'lucide-react';
import { VolumeX } from 'lucide-react';
import { ArrowUp } from 'lucide-react';


function Chat() {

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
      <div className='mt-auto'>          
            <div   onFocus={() => {
                  setFocused(true);
                }}
                onMouseOver={()=>{
                  setFocused(true);
                }}
                
                onBlur={() => {
                  setFocused(false);
                }} className={`flex items-end gap-2 w-full min-h-6 ${focused ? 'border' : 'shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a]'} bg-white rounded-[30px] px-6 py-2 transition-shadow duration-200`}>
              <Textarea
                className='flex-grow outline-none shadow-none h-full resize-none bg-white overflow-hidden text-xl'
                rows={1}
                placeholder='Talk with Pi'
                onChange={handleChange}
                ref={textAreaRef}
                value={value}
              />
                
              <Button variant={'ghost'} aria-label="Submit text" disabled={!value} className={`flex shrink-0 
                ${value ? 'bg-secondary text-white hover:bg-secondary hover:text-white ': 'bg-secondary-foreground/10 text-neutral-600 '}
                 items-center border-thin justify-center rounded-full   p-2.5  transition-colors duration-500 mb-1`}>
                  <ArrowUp height={16} width={16} className="shrink-0" strokeWidth={3}/>
                
              </Button>
            </div>
            
            </div>
    
            <div className="px-5 mt-4 py-6 w-full geist-sans text-sm mx-auto max-w-1.5xl 2xl:max-w-[47rem]"><div><div className="t-label mx-auto text-center text-primary-foreground">By using Pi, you agree to our <a href="/terms" target="_blank" className="text-primary-600 underline text-secondary">Terms</a> and <a href="/privacy" target="_blank" className="text-primary-600 underline text-secondary">Privacy Policy</a>.</div></div></div></>
  )
}

export default Chat