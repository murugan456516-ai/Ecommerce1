import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetails from './ProductDetails.jsx'
import Home from './Home.jsx'
import Cart from './Cart.jsx'
import Orders from './Orders.jsx'
import Navbar from './Navbar.jsx' // Import your new Navbar
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Navbar sits here so it shows on every page! */}
      <Navbar /> 
      
      {/* The Routes control what shows underneath the Navbar */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<App />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)