"use client";
import { Rocket, HandshakeIcon, Ship, Pen, ArrowLeft } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";


const Topic = ({ slug }: { slug: string }) => {
  const topics = [
    { title: "Let's write a short story", background: 'https://res.cloudinary.com/dncfedmdx/image/upload/v1733313102/pi-web/topic1_re07wr.webp', slug: 'write-short-story' },
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

  const topic = topics.find(topic => topic.slug === slug);

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <>
      <div className="space-y-8 p-6 mt-8 flex-grow no-scrollbar overflow-y-auto ">
        <Link href="/" className='text-primary-foreground flex items-center gap-2'>
          <ArrowLeft />
          Back
        </Link>
        {/* Header Card */}
        <Fade triggerOnce>
        <div className="bg-transparent border rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-end">
      <div className="flex-1">
    <h1
      className="text-[#0A4B3F] text-4xl font-serif transition-all duration-300 ease-in-out hover:scale-105"
    >
      {topic.title}
    </h1>
  </div>
  <div className="ml-auto">
    <Image
      src={topic.background}
      alt={topic.title}
      loading="lazy"
      width={200}
      height={100}
      quality={100}
      className="rounded-2xl w-[270px] border h-[180px] transition-all duration-300 ease-in-out hover:scale-105"
    />
  </div>
</div>
</Fade>


        {/* Questions Section */}
        <Fade triggerOnce>
        <div className="space-y-6">
          <p className="text-[#0A4B3F] text-xl">
            Hey dheeraj, let's start with a few questions to get the creative juices flowing.
          </p>
          <div className="space-y-4">
            <p className="text-[#0A4B3F] text-xl">What genre of story would you like to write?</p>
            <p className="text-[#0A4B3F] text-xl">Do you have any specific characters or settings in mind?</p>
          </div>
        </div>
        </Fade>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-[#F5E6FF] rounded-full flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-[#0A4B3F] font-medium">
              Basics of building a fictional world
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-[#FFE8E0] rounded-full flex items-center justify-center mb-4">
              <HandshakeIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-[#0A4B3F] font-medium">
              Character development in storytelling
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-[#E0F2FF] rounded-full flex items-center justify-center mb-4">
              <Ship className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-[#0A4B3F] font-medium">
              From idea to manuscript: The writing process
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-[#FFE8D9] rounded-full flex items-center justify-center mb-4">
              <Pen className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-[#0A4B3F] font-medium">
              Exploring genres: Find your niche
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topic;