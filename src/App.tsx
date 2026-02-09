import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Page Components
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to happyhollys!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Learn more about happyhollys.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Feel free to contact us anytime.</p>
  </div>
);

// Header Component
const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1 className="logo">
        <Link to="/">happyhollys</Link>
      </h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p>&copy; 2026 happyhollys. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router basename="/happyhollys">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
