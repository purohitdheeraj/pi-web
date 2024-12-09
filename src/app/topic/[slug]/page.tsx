import dynamic from 'next/dynamic';
import { useChatContext } from '@/context/ChatContext';

const Topic = dynamic(() => import('@/components/Topic'));
const Chat = dynamic(() => import('@/components/Chat'));

const BlogPost = async({ params }) => {
  const { slug } = await params;  


  return (
    <div className="flex flex-col h-full mx-auto">
      <div className="mx-auto w-full flex-grow flex flex-col max-w-[844px] px-4 relative overflow-y-auto">
        <Topic slug={slug} />
      </div>

      <div className="w-full">
        <Chat />
      </div>
    </div>
  );
}

export default BlogPost;
