'use client';
import React, { createContext, useContext, useState } from 'react';

interface ChatContextProps {
  messages: { role: string; content: string }[];
  slug: string | null;
  setSlug: (slug: string) => void;
  addMessage: (message: { role: string; content: string }) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: `Hey there, great to meet you. I'm Pi, your personal AI.\n\nMy goal is to be useful, friendly, and fun. Ask me for advice, for answers, or let's talk about whatever's on your mind.\n\nHow's your day going?` }
  ]);
  const [slug, setSlug] = useState<string | null>(null);

  const addMessage = (message: { role: string; content: string }) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, slug, setSlug, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};