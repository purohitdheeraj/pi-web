"use client";
import { lazy, Suspense } from 'react';

const Chat = lazy(() => import('@/components/Chat'));

export default function Home() {
  return (
    <div className='mx-auto w-full flex-grow flex flex-col max-w-[844px] px-4 relative h-full overflow-y-auto'>
      <div className="absolute top-0 left-0 right-0 h-16 blur-sm bg-gradient-to-b z-40 from-background to-background/50 "></div>
      <Suspense fallback={<div>Loading...</div>}>
        <Chat isTopicPage={false} />
      </Suspense>
    </div>
  );
}