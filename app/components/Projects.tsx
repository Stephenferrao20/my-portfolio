import React from 'react'
import Particles from './utils/Particles'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'AI Writing Assistant',
      description: 'Get AI-powered assistance with smart suggestions, grammar checks, and more to enhance your writing and boost productivity. Features smart suggestions, grammar & style fixes, rewrite & summarize capabilities, and multilingual support.',
      demoLink: 'https://ai-writing-assistant-cyan.vercel.app/',
      image: '/projectIcons/AiWritingAssistant.png',
      techStack: ['nextjs2.png', 'postgresql.png', 'fastapi.png', 'tailwindcss.png']
    },
    {
      title: 'Smart Chat AI',
      description: 'Your intelligent assistant with real-time knowledge. Experience AI-powered conversations with search across text and documents. Upload and analyze documents with deep comprehension and insights.',
      demoLink: 'https://smart-chat-ai-psi.vercel.app/',
      image: '/projectIcons/SmartChatAi.png',
      techStack: ['nextjs2.png', 'tailwindcss.png', 'mongodb.png', 'langchain.png']
    }
  ]

  return (
    <div className='w-full min-h-screen relative overflow-hidden py-20' id='project'>
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
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2 text-center">{project.title}</h3>
              
              <Image
                src={project.image}
                className="w-full rounded-lg border border-white/20 mb-3"
                height={280}
                width={280}
                title={`${project.title} Demo`}
                alt={project.title}
              ></Image>
              
              <p className="text-sm text-gray-300 mb-3 leading-snug">{project.description}</p>
              
              <div className="flex justify-center gap-2 mb-3">
                {project.techStack.map((icon, index) => (
                  <img 
                    key={index}
                    src={`/skillIcons/${icon}`}
                    alt={icon.replace('.png', '')}
                    className="w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                    title={icon.replace('.png', '').replace('nextjs2', 'Next.js')}
                  />
                ))}
              </div>
              
              <div className="text-center">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1.5 text-sm rounded-md font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Open Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
