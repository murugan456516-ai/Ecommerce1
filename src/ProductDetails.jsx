import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css'; 

// Import your images so they load properly
import iphoneImg from './assets/iphone.png';
import samsungImg from './assets/samsung.png';
import googleImg from './assets/googlepixel7.png';

function ProductDetails() {
  // Grab the product ID from the URL
  const { id } = useParams();

  // Mock database (matching what you have in App.jsx)
  const products = [
    {
      id: "1",
      name: "Iphone 14",
      price: 999,
      img: iphoneImg,
      description: "Experience the ultimate smartphone with an advanced dual-camera system, lightning-fast A15 Bionic chip, and a great battery life."
    },
    {
      id: "2",
      name: "Samsung Galaxy S23",
      price: 1299,
      img: samsungImg,
      description: "Capture the night with enhanced low-light cameras, enjoy smooth gaming with the Snapdragon 8 Gen 2 chip, and view it all on a stunning AMOLED display."
    },
    {
      id: "3",
      name: "Google Pixel 7",
      price: 1499,
      img: googleImg,
      description: "Powered by the Google Tensor G2 chip, this phone offers incredible photo quality, advanced security, and a beautifully sleek design."
    }
  ];

  // Find the specific product that matches the URL ID
  const product = products.find((item) => item.id === id);

  // If the user types a random ID in the URL that doesn't exist
  if (!product) {
    return (
      <div className="page-container empty-state">
        <h2>Product Not Found</h2>
        <Link to="/products" className="shop-btn">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <main className="main-content">
        <Link to="/products" className="back-link">← Back to Products</Link>
        
        <div className="details-container">
          <div className="details-img-wrapper">
            <img src={product.img} alt={product.name} className="details-img" />
          </div>
          
          <div className="details-info">
            <h2>{product.name}</h2>
            <h3 className="details-price">${product.price}</h3>
            <p className="details-description">{product.description}</p>
            
            <button className="shop-btn add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;