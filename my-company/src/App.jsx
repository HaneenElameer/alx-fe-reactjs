import React from 'react'
import { BrowserRouter  ,Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/home'
import Services from './components/Services'
import Navbar from './components/Navbar'



function App() {
 

  return (
    <>
    <Route>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Route>
      
    </>
  
  )
}

export default App
