import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BackgroundNetworkWithAnimation from "../common/BackgroundNetwork";
import BackgroundNetworkMobile from "../common/BackgroundNetworkMobile";
import QuoteForm from "../QuoteForm/QuoteForm.jsx";

const Hero = () => {
  const [viewMode, setViewMode] = useState("auto"); // "mobile" | "desktop"
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent || "";
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(ua);
    const uaHasMobile = /Mobi|Mobile/i.test(ua);

    let mode = "auto";

    if (isMobileDevice && !uaHasMobile) {
      // Mobile device but UA says desktop => force desktop
      mode = "desktop";
    } else if (window.innerWidth >= 1024) {
      mode = "desktop";
    } else {
      mode = "mobile";
    }

    console.log("Hero.jsx detected mode:", mode, ua);
    setViewMode(mode);
  }, []);

  // Function to toggle the modal
  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="relative overflow-hidden min-h-[75vh] text-white">
      {/* Mobile layout */}
      {viewMode === "mobile" && (
        <div className="relative flex flex-col min-h-[75vh]">
          <div className="absolute inset-0 -z-10">
            <BackgroundNetworkMobile />
          </div>

          <div className="container mx-auto relative z-10 flex-grow flex flex-col justify-end items-start px-4 pb-16">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Your Hub for Digital Excellence
            </h1>
            <p className="text-lg font-light mb-8">
              Building Your Online Presence — Smarter, Faster, Better.
            </p>
            <button
              onClick={toggleModal}
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}

      {/* Desktop layout */}
      {viewMode === "desktop" && (
        <div className="pt-16 pb-12 lg:pt-28 lg:pb-16">
          <div className="absolute inset-0 -z-10">
            <BackgroundNetworkWithAnimation />
          </div>

          <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 lg:px-24">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Your Hub for Digital Excellence
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light mb-8">
                Building Your Online Presence — Smarter, Faster, Better.
              </p>
              <button
                onClick={toggleModal}
                className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all"
              >
                Get a Quote
              </button>
            </div>
            <div /> {/* Right side content if any */}
          </div>
        </div>
      )}

      {/* The Modal Component rendered via Portal */}
      {isModalOpen && createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
          <QuoteForm onClose={toggleModal} />
        </div>,
        document.body
      )}
    </section>
  );
};

export default Hero;