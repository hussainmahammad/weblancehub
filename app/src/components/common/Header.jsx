import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
    }
  };

  return (
    <nav className="fixed w-full z-50 pt-1 pb-0 px-3 md:py-4 md:px-12 lg:px-5 bg-dark-charcoal text-white shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <img
              src={logo}
              alt="WeblanceHub Logo"
              className="h-5 w-auto md:h-10"
            />
          </Link>
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <span className="text-sm font-bold text-white md:text-xl">WeblanceHub.com</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-accent-blue transition-colors">Home</Link>
          <Link to="/services" className="text-white hover:text-accent-blue transition-colors">Services & Pricing</Link>
          <Link to="/work" className="text-white hover:text-accent-blue transition-colors">Our Work</Link>
          <Link to="/aboutus" className="text-white hover:text-accent-blue transition-colors">About Us</Link>
          <Link to="/contact-us" className="text-white hover:text-accent-blue transition-colors">Contact Us</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-7 h-7 text-white hover:text-accent-blue transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 -translate-y-4 max-h-0'} overflow-hidden flex flex-col items-center space-y-2 mt-0 bg-dark-charcoal/90 backdrop-blur-lg border border-accent-blue/20 rounded-b-2xl shadow-xl p-1`}>
        <Link to="/" className="text-white hover:text-accent-blue transition-all duration-300 text-base px-4 py-2 w-full text-center bg-accent-blue/10 hover:bg-accent-blue/20 rounded-lg hover:scale-105">Home</Link>
        <Link to="/services" className="text-white hover:text-accent-blue transition-all duration-300 text-base px-4 py-2 w-full text-center bg-accent-blue/10 hover:bg-accent-blue/20 rounded-lg hover:scale-105">Services & Pricing</Link>
        <Link to="/work" className="text-white hover:text-accent-blue transition-all duration-300 text-base px-4 py-2 w-full text-center bg-accent-blue/10 hover:bg-accent-blue/20 rounded-lg hover:scale-105">Our Work</Link>
        <Link to="/aboutus" className="text-white hover:text-accent-blue transition-all duration-300 text-base px-4 py-2 w-full text-center bg-accent-blue/10 hover:bg-accent-blue/20 rounded-lg hover:scale-105">About Us</Link>
        <Link to="/contact-us" className="text-white hover:text-accent-blue transition-all duration-300 text-base px-4 py-2 w-full text-center bg-accent-blue/10 hover:bg-accent-blue/20 rounded-lg hover:scale-105">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Header;