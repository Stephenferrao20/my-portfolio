import React from 'react'
import GooeyNav from './utils/GooeyNav';

const Header = () => {
    const items = [
        { label: "Home", href: "#home" },
        { label: "About Me", href: "#aboutme" },
        { label: "My Skills", href: "#skills" },
        { label: "My Projects", href: "#project" },
        { label: "Contact Me", href: "#contact" },
      ];
  return (
    <div className='fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4'>
        <div className=' py-2 px-4 rounded-full bg-blend-difference backdrop-blur-md bg-white/10'>
      <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
  </div>
    </div>
  )
}

export default Header
