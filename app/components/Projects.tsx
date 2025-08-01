import React from 'react'
import Particles from './utils/Particles'

const Projects = () => {
  return (
    <div className='w-full h-screen relative overflow-hidden' id='project'>
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
    
</div>

    </div>
  )
}

export default Projects
