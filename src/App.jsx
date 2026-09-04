import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Skill from './component/Skill'
import Project from './component/Project'
import Experience from './component/Experience'
import Socialmedia from './component/Socialmedia'
import Contact from './component/Contact'
import Footer from './component/Footer'

const Portfolio = () => (
  <>
    <div id='home' className='scroll-mt-24'><Hero /></div>
    <div id='about' className='scroll-mt-24'><About /></div>
    <div id='skills' className='scroll-mt-24'><Skill /></div>
    <div id='project' className='scroll-mt-24'><Project /></div>
    <div id='experience' className='scroll-mt-24'><Experience /></div>
    <div id='social' className='scroll-mt-24'><Socialmedia /></div>
    <div id='contact' className='scroll-mt-24'><Contact /></div>
    <Footer />
  </>
)

const ScrollHandler = () => {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || 'home'
    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname])

  return null
}

const App = () => (
  <>
    <Navbar />
    <ScrollHandler />
    <Routes>
      <Route path='/' element={<Portfolio />} />
      <Route path='*' element={<Portfolio />} />
    </Routes>
  </>
)

export default App
