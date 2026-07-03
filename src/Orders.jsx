import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext.jsx';
import './App.css';

function Orders() {
  const { orders } = useContext(ShopContext); // Pull actual orders from context

  return (
    <div className="page-container">
      <main className="main-content">
        <h2 className="page-title">Your Order History</h2>
        
        {orders.length > 0 ? (
          <div className="list-container">
            {orders.map((order, index) => (
              <div key={index} className="list-card">
                <h3>Order #{order.orderId}</h3>
                <p>Date: {order.date}</p>
                <p>Total: ${order.total}</p>
                <p>Status: <strong>{order.status}</strong></p>
                <p style={{fontSize: "0.85rem", color: "#666"}}>
                  Items: {order.items.map(item => item.name).join(", ")}
                </p>
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