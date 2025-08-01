import React from 'react'
import Particles from './utils/Particles'
import GradientText from './utils/GradientText'
import { Github, Linkedin, Mail, MessageCircleCodeIcon } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full h-80 relative overflow-hidden' id='project'>
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
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
  <div className='mb-10'>
    <GradientText
    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    animationSpeed={3}
    showBorder={false}
    className="text-5xl font-bold font-sans text-shadow-sm text-shadow-amber-20"
    >
        Get in touch
    </GradientText>

  </div>
  <footer className="bg-transparent text-white py-8 px-4 w-full bottom-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center place-items-stretch ">
       

        
        <div className="flex gap-12 text-gray-300">
          <a href="https://github.com/Stephenferrao20" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <Github/>
           
          </a>
          <a href="https://www.linkedin.com/in/stephen-ferrao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <Linkedin/>
           
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=stephenferrao.in@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Mail/>
            
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-xl text-gray-300">
        © {new Date().getFullYear()} Stephen Ferrao. All rights reserved.
      </div>
    </footer>
</div>

    </div>
  )
}

export default Footer
