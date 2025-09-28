import React from 'react'
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Reset from './pages/reset/Reset'


function App() {

  return (
    <>
      <div className='bg-[#000]'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
