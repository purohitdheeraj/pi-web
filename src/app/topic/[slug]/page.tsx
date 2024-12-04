import Chat from "@/components/Chat";

const BlogPost = async({params}) => {
  const { slug } = await params

  return(
    <>
     <div className='mx-auto w-full flex-grow flex flex-col max-w-[844px] px-4 relative h-full overflow-y-auto'>
      {/* {slug} */}
      <Chat isTopicPage={true}/>
    </div>
    </>
  )
}

export default BlogPost;