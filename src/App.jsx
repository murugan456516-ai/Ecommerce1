import React, { useContext, useState } from 'react';
import './App.css';
import Card from './Card.jsx';
import { ShopContext } from './ShopContext.jsx';

function App() {
  // Pull all products from the Context
  const { products } = useContext(ShopContext);
  
  // State to track which category is currently selected
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Automatically generate a list of unique categories from the database
  const categories = ["All", ...new Set(products.map(item => item.category))];

  // Filter the products based on the selection
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(item => item.category === selectedCategory);

  return (
    <div className="page-container">
      <main className="main-content">
        
        {/* Category Header & Filter Row */}
        <div className="shop-header">
          <h2>All Devices & Accessories</h2>
          
          <div className="category-filters">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`filter-btn ${selectedCategory === category ? 'active-filter' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Render the filtered products through your Card component */}
        <Card prod={filteredProducts} />

      </main>
    </div>
  )
}

export default App;