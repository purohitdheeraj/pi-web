
import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('@/components/Chat'));
const Topic = dynamic(() => import('@/components/Topic'));



const BlogPost = async({params}) => {
  const { slug } = await params;

  return(
    <>
     <div className='mx-auto w-full flex-grow flex flex-col max-w-[844px] px-4 relative h-full overflow-y-auto'>
      <Topic slug={slug}/>
      <div>
      <Chat isTopicPage={true}/>
      </div>
    </div>
    </>
  )
}

export default BlogPost;