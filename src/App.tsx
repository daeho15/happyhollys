import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Page Components
const Home = () => (
  <div>
    <h2>홈 페이지</h2>
    <p>Happy Hollys에 오신 것을 환영합니다!</p>
  </div>
);

const About = () => (
  <div>
    <h2>소개</h2>
    <p>Happy Hollys에 대한 정보를 확인하세요.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>연락처</h2>
    <p>문의사항이 있으시면 언제든 연락주세요.</p>
  </div>
);

// Header Component
const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1 className="logo">
        <Link to="/">Happy Hollys</Link>
      </h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">홈</Link></li>
          <li><Link to="/about" className="nav-link">소개</Link></li>
          <li><Link to="/contact" className="nav-link">연락처</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p>&copy; 2025 Happy Hollys. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
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
