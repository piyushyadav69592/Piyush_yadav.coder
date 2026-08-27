import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Skill from './component/Skill'
import Project from './component/Project'
import Experience from './component/Experience'
import Socialmedia from './component/Socialmedia'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Experience/>
      <Socialmedia/>

      {/* <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> */}
    </div>
  )
}

export default App