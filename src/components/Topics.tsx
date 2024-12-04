'use client';
import Image from 'next/image';
import topic1 from '../../public/assets/topic1.webp';
import topic2 from '../../public/assets/topic2.webp';
import topic3 from '../../public/assets/topic3.webp';
import topic4 from '../../public/assets/topic4.webp';
import topic5 from '../../public/assets/topic5.webp';
import topic6 from '../../public/assets/topic6.webp';
import topic7 from '../../public/assets/topic7.webp';

const Topics = () => {
  const topics = [
    { title: "Let’s write a short story", background: topic1 },
    { title: "Write me a poem, Pi", background: topic2 },
    { title: "Relationship advice", background: topic3 },
    { title: "Roleplay your next job interview with Pi", background: topic4 },
    { title: "How to be a mentor", background: topic5 },
    { title: "Jealousy vs. envy", background: topic6 },
    { title: "Let Pi pick your DJ name", background: topic7 },
    { title: "Write that novel!", background: topic1 },
    { title: "Tech advice for newcomers", background: topic2 },
    { title: "How to start a podcast", background: topic3 },
    { title: "Mindfulness techniques", background: topic4 },
    { title: "Boosting creativity", background: topic5 },
    { title: "Boosting creativity", background: topic6 },
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
    <div className="grid grid-cols-2 gap-4 overflow-y-auto">
      {topics.map((topic, index) => {
        return (
          <div
            key={index}
            className={`mb-6 flex items-center rounded-xl shadow-[0px_12px_32px_-6px_#e4dbc8,0px_2px_16px_-6px_#0000001a] transition-all cursor-pointer duration-150 hover:scale-95 ${getItemClasses(index)}`}
          >
            <div className="pr-4 shrink-0 relative min-h-[160px] w-full h-full flex flex-col shadow-inner">
              <Image
                src={topic.background}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                alt="Background"
                layout="fill"
              />

              <div className="absolute inset-0 bg-black/60 opacity-50 rounded-xl"></div>

              <div className="relative mt-auto z-10 p-4 text-white">
                <h2 className="leading-6 text-[18px]">{topic.title}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
