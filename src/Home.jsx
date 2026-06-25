import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

// Import your existing assets to showcase them elegantly
import iphoneImg from './assets/iphone.png';
import samsungImg from './assets/samsung.png';
import googleImg from './assets/googlepixel7.png';

function Home() {
  return (
    <div className="home-container">   
      <main className="main-content">
        
        {/* Modern E-Commerce Welcome Hero Section */}
        <section className="ecom-hero">
          <div className="hero-text-block">
            <span className="promo-badge">Limited Time Offer — Free Shipping</span>
            <h2 className="hero-headline">Upgrade to the Next Generation</h2>
            <p className="hero-tagline">
              Explore premium flagship smartphones with cutting-edge cameras, incredible performance, and all-day battery life.
            </p>
            <Link to="/products" className="discover-btn">
              Browse All Devices →
            </Link>
          </div>
        </section>

        {/* Shop By Brand Visual Row */}
        <section className="brand-showcase">
          <h3 className="section-title">Shop Your Favorite Brands</h3>
          <div className="brand-grid">
            
            <div className="brand-card">
              <div className="brand-img-box">
                <img src={iphoneImg} alt="Apple iPhone" />
              </div>
              <h4>Apple Collection</h4>
              <p>Incredible performance meets elegance.</p>
              <Link to="/products" className="brand-link">Shop iPhone</Link>
            </div>

            <div className="brand-card">
              <div className="brand-img-box">
                <img src={samsungImg} alt="Samsung Galaxy" />
              </div>
              <h4>Samsung Galaxy</h4>
              <p>Redefining mobile innovation and design.</p>
              <Link to="/products" className="brand-link">Shop Galaxy</Link>
            </div>

            <div className="brand-card">
              <div className="brand-img-box">
                <img src={googleImg} alt="Google Pixel" />
              </div>
              <h4>Google Pixel</h4>
              <p>The smartest Android experience yet.</p>
              <Link to="/products" className="brand-link">Shop Pixel</Link>
            </div>

          </div>
        </section>

        {/* E-commerce Feature Value Cards */}
        <section className="perks-container">
          <div className="perk-box">
            <span className="perk-icon">🛡️</span>
            <div>
              <h5>Official Warranty</h5>
              <p>100% genuine products with 2-year manufacturer support.</p>
            </div>
          </div>
          <div className="perk-box">
            <span className="perk-icon">🔄</span>
            <div>
              <h5>Easy Trade-In</h5>
              <p>Exchange your older phone for immediate store credit.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;