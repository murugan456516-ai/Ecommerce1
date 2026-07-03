import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from './ShopContext.jsx';
import './App.css'; 

function Cart() {
  const { cartItems, checkout } = useContext(ShopContext);
  const navigate = useNavigate(); // Used to redirect user after checkout

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    checkout(totalAmount);
    navigate('/orders'); // Send them to the orders page after buying
  };

  return (
    <div className="page-container">
      <main className="main-content">
        <h2 className="page-title">Your Shopping Cart</h2>
        
        {cartItems.length > 0 ? (
          <div className="list-container">
            {cartItems.map((item, index) => (
              <div key={index} className="list-card">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p><strong>Subtotal: ${item.price * item.quantity}</strong></p>
              </div>
            ))}
            
            <div className="checkout-section">
              <h3>Total: ${totalAmount}</h3>
              <button className="shop-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <p>Your cart is currently empty.</p>
            <Link to="/products" className="shop-btn">Continue Shopping</Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default Cart;