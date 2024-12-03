"use client";
import * as React from "react"
import useAutosizeTextArea from "../../hooks/use-autosize-textarea";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {


  return (
    <textarea
      className={cn(
        "flex w-full rounded-md bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
