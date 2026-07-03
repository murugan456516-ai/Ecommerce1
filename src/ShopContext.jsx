import React, { createContext, useState } from 'react';

// Your existing local images
import iphoneImg from './assets/iphone.png';
import samsungImg from './assets/samsung.png';
import googleImg from './assets/googlepixel7.png';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  // Expanded Database with Categories
  const products = [
    // Smartphones
    { id: "1", name: "Iphone 14", price: 999, category: "Smartphones", img: iphoneImg, description: "Experience the ultimate smartphone." },
    { id: "2", name: "Samsung Galaxy S23", price: 1299, category: "Smartphones", img: samsungImg, description: "Capture the night with enhanced low-light cameras." },
    { id: "3", name: "Google Pixel 7", price: 1499, category: "Smartphones", img: googleImg, description: "Powered by the Google Tensor G2 chip." },
    
    // Wearables
    { id: "4", name: "Apple Watch Series 8", price: 399, category: "Wearables", img: "https://via.placeholder.com/200x200?text=Apple+Watch", description: "Advanced health sensors and apps." },
    { id: "5", name: "Galaxy Watch 5", price: 279, category: "Wearables", img: "https://via.placeholder.com/200x200?text=Galaxy+Watch", description: "Sleep tracking and wellness monitoring." },
    
    // Accessories
    { id: "6", name: "AirPods Pro", price: 249, category: "Accessories", img: "https://via.placeholder.com/200x200?text=AirPods", description: "Active Noise Cancellation for immersive sound." },
    { id: "7", name: "Fast Charging Adapter", price: 29, category: "Accessories", img: "https://via.placeholder.com/200x200?text=Charger", description: "Power up your devices in record time." }
  ];

  // Rest of your state (Cart, Orders, Auth)
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null); 

  // Add to Cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  // Checkout
  const checkout = (totalAmount) => {
    if (cartItems.length === 0) return;
    const newOrder = {
      orderId: `ORD-${Math.floor(Math.random() * 10000)}`,
      date: new Date().toLocaleDateString(),
      total: totalAmount,
      items: cartItems,
      status: "Processing"
    };
    setOrders((prevOrders) => [newOrder, ...prevOrders]); 
    setCartItems([]); 
    alert("Checkout successful! Your order has been placed.");
  };

  // Auth Functions
  const login = (email) => { setUser({ email }); alert("Logged in successfully!"); };
  const logout = () => { setUser(null); };

  const contextValue = { products, cartItems, addToCart, checkout, orders, user, login, logout };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};