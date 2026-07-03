import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ProductDetails from './ProductDetails.jsx';
import Home from './Home.jsx';
import Cart from './Cart.jsx';
import Orders from './Orders.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './ShopContext.jsx';
import Auth from './Auth.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider> {/* Wrap everything here */}
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<App />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  </StrictMode>
);