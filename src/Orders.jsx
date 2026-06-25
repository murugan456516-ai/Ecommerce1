import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Orders() {
  // Mock data to simulate past orders
  const orderHistory = [
    { orderId: "ORD-9876", date: "2026-06-20", total: 999, status: "Delivered" },
    { orderId: "ORD-9877", date: "2026-06-24", total: 1499, status: "Processing" }
  ];

  return (
    <div className="page-container">
      <main className="main-content">
        <h2 className="page-title">Your Order History</h2>
        
        {orderHistory.length > 0 ? (
          <div className="list-container">
            {orderHistory.map((order, index) => (
              <div key={index} className="list-card">
                <h3>Order #{order.orderId}</h3>
                <p>Date: {order.date}</p>
                <p>Total: ${order.total}</p>
                <p>Status: <strong>{order.status}</strong></p>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>You haven't placed any orders yet.</p>
            <Link to="/products" className="shop-btn">Start Shopping</Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default Orders;