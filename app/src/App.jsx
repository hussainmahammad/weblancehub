import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import OurWorkSection from './components/ourwork/OurWorkSection.jsx';
import Contactus from './components/contactus/contactus.jsx'; // Fixed case
import AboutUs from './components/Aboutus/AboutUs.jsx';      // Ensure folder/file match

function App() {
  return (
    <Router>
      <Header />

      <div className="relative min-h-screen flex flex-col bg-white overflow-hidden">
        {/* Foreground Content */}
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Pricing />} />
            <Route path="/work" element={<OurWorkSection />} />
            <Route path="/contact-us" element={<Contactus />} /> {/* Fixed component name */}
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>

        {/* Footer sticks to bottom when content is short */}
        <footer className="relative z-10">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
