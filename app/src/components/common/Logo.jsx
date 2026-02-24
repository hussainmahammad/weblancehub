import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="p-1.5 rounded-full bg-accent-blue text-white shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12H8" />
          <path d="M12 8v8" />
        </svg>
      </div>
      <span className="text-xl font-bold text-dark-charcoal">WeblanceHub.com</span>
    </div>
  );
};

export default Logo;