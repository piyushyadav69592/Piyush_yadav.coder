import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Skill from './component/Skill'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>

      {/* <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> */}
    </div>
  )
}

export default App