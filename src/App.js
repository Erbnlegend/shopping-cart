import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '~/components/Navbar'
import About from '~/components/About'
import Cart from '~/components/Cart'
import Home from '~/components/Home'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
