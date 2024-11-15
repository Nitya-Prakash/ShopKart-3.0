import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Context from './Utils/Context'
import ProductDetails from './Components/ProductDetails'
import Category from './Components/Category'
import BuyNow from './Components/BuyNow'
import Address from './Components/Address'
import PaymentGateway from './Components/PaymentGateway'

const App = () => {
  return (
    <div>
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/?category/:category" element={<Category />} />
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/address" element={<Address />} />
          <Route path="/paymentGateway" element={<PaymentGateway />} />
        </Routes>
      </Context>
    </div>
  )
}

export default App