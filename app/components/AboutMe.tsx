import React from 'react'
import Particles from './utils/Particles'
import ShinyText from './utils/ShinyText'
import DeveloperCard from './utils/DeveloperCard'
import GradientText from './utils/GradientText'

const AboutMe = () => {
    const textData1 = ' I\'m Stephen Ferrao, a Full-Stack Developer deeply interested in AI-powered systems and modern web tech. I enjoy building efficient, scalable apps using technologies like Next.js, FastAPI, and MongoDB.'
   
    const textData2 = 'From AI writing assistants to music genre classifiers and RAG-based chat apps, my projects reflect my love for solving real-world problems with code.\
    I\'m currently diving deep into LangChain, real-time RAG apps, and multimodal AI experiences.'
  return (
    <div className='w-full h-screen relative overflow-hidden' id='aboutme'>
    <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mt-20">
  <h2 className="text-3xl mb-0 font-sans font-bold ">About Me</h2>
    <section className="max-w-3xl mx-auto py-10 px-4 text-white text-center md:text-left flex items-stretch">
  <div>
  <ShinyText text={textData1} disabled={false} speed={1.5} className='text-lg leading-relaxed font-sans font-extrabold' />
    <br /><br />
    <ShinyText text={textData2} disabled={false} speed={1.5} className='text-lg leading-relaxed font-sans font-extrabold ' />
  </div>
  <div>
    <DeveloperCard/>
  </div>
</section>
</div>

    </div>
  )
}

export default AboutMe
