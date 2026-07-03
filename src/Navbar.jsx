import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We are creating a dedicated CSS file for the navbar

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        
        {/* Left: Brand Logo */}
        <Link to="/" className="navbar-logo">
          Mobile <span>&amp; CO</span>
        </Link>

        {/* Center: Main Navigation */}
        <nav className="navbar-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/products" className="nav-item">Shop</Link>
        </nav>

        {/* Right: User Actions (Orders & Cart) */}
        <div className="navbar-actions">
          <Link to="/orders" className="action-btn">
            📦 <span className="action-text">Orders</span>
          </Link>
          
          <Link to="/cart" className="action-btn cart-btn">
            🛒 <span className="action-text">Cart</span>
            {/* Hardcoded badge to show you how a professional cart looks */}
            <span className="cart-badge">2</span> 
          </Link>
        </div>
        
      </div>
    </header>
  );
}

export default Navbar;