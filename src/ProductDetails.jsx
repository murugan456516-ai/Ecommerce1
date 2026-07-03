import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from './ShopContext.jsx';
import './App.css'; 

function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext); // Pull from context

  const product = products.find((item) => item.id === id);

  if (!product) return <h2>Product Not Found</h2>;

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
            
            {/* Make the button functional */}
            <button className="shop-btn add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;