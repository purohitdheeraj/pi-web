'use client';
import Image from 'next/image';
import chat from '../../public/assets/chat.svg';
import topic1 from '../../public/assets/topic1.webp'

const Topics = () => {
  const topics = [
    {
      title: "Let’s write a short story",
      background: topic1,
    },
    {
      title: "Write me a poem, Pi",
      background: topic1,
    },
    {
      title: "Relationship advice",
      background: topic1,
    },
    {
      title: "Roleplay your next job interview with Pi",
      background: topic1,
    },
    {
      title: "How to be a mentor",
      background: topic1,
    },
    {
      title: "Jealousy vs. envy",
      background: topic1,
    },
  ];


  return (
    <>
    <div className='flex flex-col overflow-y-auto'>

      
      {topics.map((topic, index)=>{
        return (
          <div key={index} className="mb-6 flex items-center rounded-xl shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a] transition-all duration-150 hover:scale-95">
          <div className="pr-4 shrink-0 relative min-h-[160px] w-full h-full flex flex-col shadow-inner">
            {/* Image with overlay */}
            <Image 
              src={topic.background} 
              className='absolute inset-0 w-full h-full object-cover rounded-xl' 
              alt='Background' 
              layout='fill' 
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-50 rounded-xl"></div>
        
            {/* Content */}
            <div className="relative mt-auto z-10 p-4 text-white">
              <h2 className="font-condensed text-h-m">{topic.title}</h2>
            </div>
          </div>
        </div>
        
          )
      })}


      </div>
    </>
  )
}

export default Topics