import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from './ShopContext.jsx'; 
import './Navbar.css'; 

function Navbar() {
  // Pull cart items, user status, and the logout function from your global context
  const { cartItems, user, logout } = useContext(ShopContext);
  const navigate = useNavigate();

  // Calculate the total quantity of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Handle the logout process and redirect the user to the home page
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        
        {/* Left: Brand Logo */}
        <Link to="/" className="navbar-logo">
          Mobile <span>&amp; CO</span>
        </Link>

        {/* Center: Main Navigation & Search Bar */}
        <div className="navbar-center">
          <nav className="navbar-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/products" className="nav-item">Shop</Link>
            <Link to="/products" className="nav-item">Categories</Link>
          </nav>

          {/* Search Bar */}
          <div className="search-container">
            <input type="text" placeholder="Search devices..." className="search-input" />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        {/* Right: User Actions (Profile, Orders, Cart) */}
        <div className="navbar-actions">
          
          {/* Dynamic Authentication Button: Show Logout if user exists, otherwise show Login */}
          {user ? (
            <button 
              onClick={handleLogout} 
              className="action-btn" 
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
            >
              🚪 <span className="action-text">Logout</span>
            </button>
          ) : (
            <Link to="/auth" className="action-btn">
              👤 <span className="action-text">Login</span>
            </Link>
          )}

          {/* Orders Link */}
          <Link to="/orders" className="action-btn">
            📦 <span className="action-text">Orders</span>
          </Link>
          
          {/* Cart Link with Dynamic Notification Badge */}
          <Link to="/cart" className="action-btn cart-btn">
            🛒 <span className="action-text">Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;