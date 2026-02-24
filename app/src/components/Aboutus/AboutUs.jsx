import React from 'react';

// Main component for the About Us page, styled to match the user's website.
const AboutUs = () => {
  const whoWeAreContent = "We are a passionate group of tech enthusiasts who work in banking application production support during the day and help small businesses go online in our free time. Our goal is simple — make it easy and affordable for anyone to have a professional online presence.";

  const missionContent = [
    { text: "Fast & Secure – no backend, no headaches" },
    { text: "Zero Maintenance – once deployed, they just work" },
    { text: "Budget-Friendly – perfect for small businesses and personal portfolios" },
  ];

  const whatWeDoContent = [
    { text: "Business Websites – perfect for shops, services, and startups", emoji: "🌐" },
    { text: "Portfolio & Resume Sites – showcase your work or career beautifully", emoji: "💼" },
    { text: "Invitation Sites – birthdays, weddings, or any special event", emoji: "📧" },
    { text: "Cloud Hosting Help – for clients who need backend solutions", emoji: "☁️" },
  ];

  const whyChooseUsContent = [
    "Personal attention to every project",
    "Affordable one-time cost (no hidden fees)",
    "Support and guidance until your site is live",
    "Option to expand or upgrade later",
  ];

  const contactEmail = "contact@weblancehub.com";

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      
      {/* Hero Section - Matching the header style of the user's site */}
      <div className="bg-[#2D323A] text-white py-16 px-4 md:px-8 relative overflow-hidden">
        {/* Abstract pattern to simulate the background mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#FFFFFF"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)"/>
        </svg>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              About <span className="text-[#FF8C00]">Us</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light mb-6 leading-relaxed">
              We are a passionate group of tech enthusiasts helping small businesses go online in our free time.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            {/* Logo and text matching the hero section */}
            <span className="text-6xl font-bold text-white tracking-tight">W<span className="text-2xl font-normal">eblanceHub.com</span></span>
          </div>
        </div>
      </div>
      
      {/* Main content sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          
          {/* Who We Are Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <p className="text-gray-600 leading-relaxed">{whoWeAreContent}</p>
            </div>
          </div>

          {/* Our Mission Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that every small business, freelancer, or professional should have access to a simple and beautiful website without worrying about maintenance or high costs. That’s why we specialize in static websites.
              </p>
              <ul className="space-y-4 text-gray-700">
                {missionContent.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-green-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.64"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 leading-relaxed">
                If you need a full-fledged website with backend and cloud hosting, we’ve got you covered too! We can set up everything on AWS Cloud with minimal setup and cost, so you can focus on your business while we handle the tech.
              </p>
            </div>
          </div>

          {/* What We Do Section - Mimicking the card layout */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeDoContent.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-50 text-blue-500 rounded-full">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-800">{item.text.split(' – ')[0]}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.text.split(' – ')[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {whyChooseUsContent.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                We’d love to hear about your project and help bring your ideas online!
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <span className="text-xl">📧</span>
                <a href={`mailto:${contactEmail}`} className="hover:underline transition-colors duration-200">{contactEmail}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
