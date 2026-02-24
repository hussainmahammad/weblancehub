import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import BackgroundNetwork from '../components/common/BackgroundNetwork';

function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Background Network */}
      <BackgroundNetwork />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Hero />
        <Services />
      </div>
    </div>
  );
}

export default Home;
    