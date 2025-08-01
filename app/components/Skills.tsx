import React from 'react'
import Particles from './utils/Particles'
import GradientText from './utils/GradientText'
import SkillCard from './utils/SkillCard'
import { getSkills } from '../data/skillsData'
import './utils/SkillCard.css'

const Skills = () => {
    const skillsData = getSkills();
  return (
    <div className='w-full h-screen relative overflow-hidden' id='skills'>
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
  <div className="absolute inset-0 flex flex-col items-center z-10 mt-20">
    <div className='mb-8'>
    <GradientText 
    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    animationSpeed={3}
    showBorder={false}
    className="text-5xl font-bold font-sans text-shadow-sm text-shadow-amber-20"
    >
        My Skills
    </GradientText>
  </div>
  <div className='flex flex-wrap gap-4 justify-center max-w-4xl'>
    {skillsData.map((skill) => (
        <SkillCard
        key={skill.name}
        name={skill.name}
        icon={skill.icon}
        />
    ))}
  </div>
  
  </div>
  
      
    </div>
  )
}

export default Skills
