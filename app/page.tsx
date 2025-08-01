import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

const page = () => {
  return (
    <div className='w-full h-screen  '>
      <Header />
      <Hero />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default page
