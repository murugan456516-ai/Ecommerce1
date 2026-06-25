import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

function Cart() {
  // Mock data to simulate items in a cart
  const cartItems = [
    { id: "1", name: "Iphone 14", price: 999, quantity: 1 },
    { id: "3", name: "Google Pixel 7", price: 1499, quantity: 1 }
  ];

  // Calculate the total price of the items
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

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
              <h3>Total: ${total}</h3>
              <button className="shop-btn">Proceed to Checkout</button>
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