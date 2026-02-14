import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        {/* Change href="index.html" to to="/" */}
        <li><Link to="/">Home</Link></li>
        
        {/* Change href="products.html" to to="/products" */}
        <li><Link to="/products">Products</Link></li>
        
        {/* Do the same for all other links */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
        <li><Link to="/cart">Shopping Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;