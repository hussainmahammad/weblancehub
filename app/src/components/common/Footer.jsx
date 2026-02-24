import React from 'react';
import BackgroundNetwork from './BackgroundNetwork';
import BackgroundNetworkWithAnimation from "../common/BackgroundNetwork";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Added Link for internal routing

const Footer = () => {
  // Social media links provided by the user
  const socialLinks = {
    instagram: "https://www.instagram.com/weblancehub?igsh=MWFlempoOTBsZDM1YQ==",
    facebook: "https://www.facebook.com/weblancehubcom",
    twitter: "https://x.com/weblancehub",
  };

  // Helper component for social icons to ensure consistent styling and external linking
  const SocialIconLink = ({ href, children, label, sizeClass }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-white hover:text-accent-blue transition-colors"
    >
      {/* Ensure the icon size is dynamic based on props */}
      {React.cloneElement(children, { className: sizeClass })}
    </a>
  );

  return (
    <footer className="relative bg-dark-charcoal text-white lg:py-8">
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          {/* Note: BackgroundNetwork component usage assumed to be correct */}
          <div className="relative w-full h-full transform scale-45 origin-top-right">
            <BackgroundNetwork />
          </div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 py-12">
          <nav className="flex flex-wrap space-x-6 md:space-x-8">
            {/* CORRECTED: About Us link using Link for internal routing */}
            <Link to="/aboutus" className="text-white hover:text-accent-blue transition-colors">About Us</Link>
            
            {/* CORRECTED: Contact Us link using Link for internal routing */}
            <Link to="/contact-us" className="text-white hover:text-accent-blue transition-colors">Contact Us</Link>
            
            {/* Social Icons with larger size for desktop (h-6 w-6) */}
            <SocialIconLink 
              href={socialLinks.facebook} 
              label="Facebook" 
              sizeClass="h-6 w-6"
            >
              <FaFacebookF />
            </SocialIconLink>
            
            <SocialIconLink 
              href={socialLinks.instagram} 
              label="Instagram" 
              sizeClass="h-6 w-6"
            >
              <FaInstagram />
            </SocialIconLink>
            
            <SocialIconLink 
              href={socialLinks.twitter} 
              label="X (Twitter)" 
              sizeClass="h-6 w-6"
            >
              <FaXTwitter />
            </SocialIconLink>
          </nav>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="block md:hidden relative h-[120px]">
        {/* Background Network at top */}
        <div className="absolute top-0 left-0 right-0 z-0 transform scale-[1] -translate-x-[px]">
          {/* Note: BackgroundNetworkWithAnimation component usage assumed to be correct */}
          <BackgroundNetworkWithAnimation />
        </div>

        {/* Footer content at top */}
        <div className="absolute top-4 left-0 w-full z-10 px-6 flex justify-between items-center">
          {/* CORRECTED: About Us link using Link for internal routing */}
          <Link to="/aboutus" className="text-white hover:text-accent-blue">About Us</Link>

          {/* Social Icons (h-5 w-5) */}
          <div className="flex space-x-4">
            {/* Facebook */}
            <SocialIconLink 
              href={socialLinks.facebook} 
              label="Facebook" 
              sizeClass="h-5 w-5"
            >
              <FaFacebookF />
            </SocialIconLink>
            
            {/* Instagram */}
            <SocialIconLink 
              href={socialLinks.instagram} 
              label="Instagram" 
              sizeClass="h-5 w-5"
            >
              <FaInstagram />
            </SocialIconLink>
            
            {/* X / Twitter */}
            <SocialIconLink 
              href={socialLinks.twitter} 
              label="X (Twitter)" 
              sizeClass="h-5 w-5"
            >
              <FaXTwitter />
            </SocialIconLink>
          </div>
          
          {/* CORRECTED: Contact Us link using Link for internal routing */}
          <Link to="/contact-us" className="text-white hover:text-accent-blue">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;