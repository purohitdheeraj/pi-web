'use client';
import Image from 'next/image';
import Link from 'next/link';


const Topics = () => {
  const topics = [
    { title: "Let’s write a short story", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313102/pi-web/topic1_re07wr.webp', slug: 'write-short-story' },
    { title: "Write me a poem, Pi", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic2_bf7lxz.webp', slug: 'write-poem' },
    { title: "Relationship advice", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic3_lobsd9.webp', slug: 'relationship-advice' },
    { title: "Roleplay your next job interview with Pi", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic4_gx1zsz.webp', slug: 'job-interview-roleplay' },
    { title: "How to be a mentor", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic5_kjucqb.webp', slug: 'how-to-be-mentor' },
    { title: "Jealousy vs. envy", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic6_ps2l0a.webp', slug: 'jealousy-vs-envy' },
    { title: "Let Pi pick your DJ name", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic7_i7gvs3.webp', slug: 'pick-dj-name' },
    { title: "Write that novel!", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313102/pi-web/topic1_re07wr.webp', slug: 'write-novel' },
    { title: "Tech advice for newcomers", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic2_bf7lxz.webp', slug: 'tech-advice-newcomers' },
    { title: "How to start a podcast", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic3_lobsd9.webp', slug: 'start-podcast' },
    { title: "Mindfulness techniques", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic4_gx1zsz.webp', slug: 'mindfulness-techniques' },
    { title: "Boosting creativity", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313103/pi-web/topic5_kjucqb.webp', slug: 'boost-creativity' },
  ];

  const getItemClasses = (index:number) => {
    // Check if the current row follows the first pattern (0, 1, 2, 3)
    const isFirstPattern = Math.floor(index / 4) % 2 === 0;

    if (isFirstPattern) {
      if (index % 4 === 0 || index % 4 === 1) {
        return 'col-span-1'; 
      }
      if (index % 4 === 2) {
        return 'col-span-2'; 
      }
      if (index % 4 === 3) {
        return 'col-span-2 h-[400px]'; 
      }
    } else {
      if (index % 4 === 0) {
        return 'col-span-2'; 
      }
      if (index % 4 === 1 || index % 4 === 2) {
        return 'col-span-1'; 
      }
      if (index % 4 === 3) {
        return 'col-span-2 h-[400px]'; 
      }
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4  rounded-lg overflow-y-auto bg-[#eee6d7]">
      {topics.map((topic, index) => {
        return (
          <Link className={`mb-6 flex items-center rounded-xl shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a] transition-all cursor-pointer duration-150 hover:scale-95 ${getItemClasses(index)}`} key={index} href={`/topic/${topic.slug}`}>
          
            <div className="pr-4 shrink-0 relative min-h-[160px] w-full h-full flex flex-col shadow-inner">
              <Image
                src={topic.background}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                alt="Background"
                loading='lazy'
                width={800}   // Adjust width based on your layout needs
                height={400}  // Adjust height based on your layout needs
                quality={100} 
              />

              <div className="absolute inset-0 bg-black/60 opacity-50 rounded-xl"></div>

              <div className="relative mt-auto z-10 p-4 text-white">
                <h2 className="leading-6 text-[18px]">{topic.title}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Topics;
