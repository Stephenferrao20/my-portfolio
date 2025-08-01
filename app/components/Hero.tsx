import React from 'react'
import DarkVeil from './utils/Darkveil'
import BlurText from './utils/BlurText'
import SplitText from './utils/SplitText'

const Hero = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative' id='home'>
      <DarkVeil />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className='flex items-center gap-2 mb-6'>
        <BlurText
          text="Hi, I'm "
          delay={150}
          animateBy="words"
          direction="top"
          className="text-7xl font-bold font-mono text-white"
        />
        
        <BlurText
          text=" Stephen 👋 "
          delay={150}
          animateBy="words"
          direction="top"
          className="text-7xl font-bold text-purple-500"
        />
        </div>
        
        <br />
         <BlurText
          text="A Full-Stack Developer & AI Enthusiast"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl mb-8 font-mono text-white"
        />

        <SplitText
            text="I build smart, scalable web applications using modern technologies like Next.js, FastAPI, and MongoDB."
            className="text-2xl mt-9 py-2 px-5 tracking-tight font-mono text-shadow-sm text-shadow-purple-600"
            delay={100}
            duration={0.0}
            ease="bounce.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            />
        <SplitText
            text=" Currently exploring RAG apps, LangChain, and AI integrations."
            className="text-2xl py-2 px-5 tracking-tight font-mono text-shadow-sm text-shadow-blue-500"
            delay={100}
            duration={0}
            ease="bounce.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            />

      </div>
      
    </div>
  )
}

export default Hero
