import { Link } from 'react-router-dom';
import './App.css'; // Make sure it can access your header/nav styles

function Navbar() {
  return (
    <>
      <header className="header-container">
        <h1>Mobile &amp; CO</h1>
      </header>

      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </>
  );
}

export default Navbar;