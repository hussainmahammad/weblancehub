import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg-light-gray font-roboto">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;