import React, { useState, useContext } from 'react';
import { ShopContext } from './ShopContext.jsx';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Make sure this is imported!

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const { login } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate('/');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        
        {/* Header Section */}
        <div className="auth-header">
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p className="auth-subtitle">
            {isLogin 
              ? "Please enter your details to sign in." 
              : "Sign up for exclusive deals and faster checkout."}
          </p>
        </div>

        {/* Form Section */}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="auth-input"
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="auth-input"
              required 
            />
          </div>
          
          <button type="submit" className="auth-submit-btn">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Toggle Login/Signup */}
        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
              {isLogin ? "Sign up" : "Log in"}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Auth;