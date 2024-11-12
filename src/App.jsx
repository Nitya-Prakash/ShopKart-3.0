import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Context from './Utils/Context'

const App = () => {
  return (
    <div>
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Context>
    </div>
  )
}

export default App