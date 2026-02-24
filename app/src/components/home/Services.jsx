import React, { useState, useRef, useEffect } from 'react';
import { serviceItems } from '../../data/servicesData.jsx';
import { whyChooseUsItems } from '../../data/whyChooseUsData.jsx';
import { howItWorksItems } from '../../data/howItWorksData.jsx';

const Services = () => {
  const sliderRef = useRef(null);

  const CardFlip = ({ front, back }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <div 
        className="flip-card cursor-pointer" 
        onClick={handleCardClick}
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {front}
          </div>
          <div className="flip-card-back">
            {back}
          </div>
        </div>
      </div>
    );
  };

  const ServiceSlider = ({ services }) => {
    const scrollLeft = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.offsetWidth / 1.5,
          behavior: 'smooth',
        });
      }
    };

    const scrollRight = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth / 1.5,
          behavior: 'smooth',
        });
      }
    };

    return (
      <div className="relative">
        <button
          className="md:absolute top-1/2 -left-12 z-10 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition hidden md:block"
          onClick={scrollLeft}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="md:absolute top-1/2 -right-12 z-10 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition hidden md:block"
          onClick={scrollRight}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={sliderRef}
          className="flex space-x-4 md:space-x-6 overflow-x-scroll scrollbar-hide py-4 snap-x snap-mandatory"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex-none w-[calc(100%-2rem)] md:w-[calc((100%/3)-1.5rem)] h-96 snap-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-white/30 md:bg-white backdrop-blur-md md:backdrop-blur-none border border-gray-200/30 md:border-gray-200 rounded-2xl"
            >
              <CardFlip
                front={
                  <div className="flex flex-col items-center p-6 text-center h-full">
                    <div className="p-3 bg-gray-100/50 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="h-10 w-10 text-accent-blue" />
                    </div>
                    <h3 className="font-semibold text-xl mb-1">{service.title}</h3>
                    <div className="flex flex-col items-center mb-2">
                      <span className="text-sm text-gray-500">Starts at</span>
                      <span className="text-2xl font-bold text-accent-blue">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-auto">Click to know more</p>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center p-6 text-center h-full">
                    <h3 className="font-semibold text-xl mb-4">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const WhyChooseUsSection = ({ features }) => {
    return (
      <div className="relative overflow-hidden p-8 rounded-3xl bg-dark-charcoal/5 backdrop-blur-sm border border-gray-100/30">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
          }}
        ></div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-gray-200/50 backdrop-blur-md bg-white/10 transition-all duration-300 overflow-hidden hover:shadow-xl hover:translate-y-[-0.25rem]"
            >
              <div 
                className="absolute inset-0 z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-snake"
                style={{
                  background: `conic-gradient(from 0deg, transparent, #3B82F6, transparent, #3B82F6, transparent)`,
                  backgroundSize: `100% 100%`,
                }}
              ></div>

              <div className="relative z-10 text-center">
                <div className="mb-4 inline-block transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="p-4 bg-gray-100/50 rounded-full text-accent-blue">
                    <feature.icon className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-dark-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-800">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const AnimatedHowItWorksSection = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalDuration = 6000;
    const intervalTime = 50;

    useEffect(() => {
      let interval;
      if (!isPaused) {
        interval = setInterval(() => {
          setElapsedTime((prevTime) => {
            const newTime = prevTime + intervalTime;
            if (newTime >= totalDuration) {
              setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
              return 0;
            }
            return newTime;
          });
        }, intervalTime);
      }

      return () => clearInterval(interval);
    }, [steps.length, isPaused]);

    const handleStepClick = (index) => {
      setCurrentStep(index);
      setElapsedTime(0);
      setIsPaused(true);
    };

    const handleContentClick = () => {
      setIsPaused(!isPaused);
    };

    const progress = (elapsedTime / totalDuration) * 100;
    const Step = steps[currentStep];

    return (
      <div className="relative flex flex-col items-center text-center p-8 min-h-[400px]">
        <div className="flex justify-center space-x-4 mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              onClick={() => handleStepClick(index)}
              className={`flex items-center justify-center h-8 w-8 rounded-full border-2 cursor-pointer transition-colors duration-300 ${
                index === currentStep ? 'bg-accent-blue border-accent-blue text-white' : 'border-gray-400 text-gray-400'
              }`}
            >
              <span className="font-bold text-sm">{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="w-full max-w-lg h-1.5 bg-gray-200 rounded-full overflow-hidden mb-12">
          <div 
            className="h-full bg-accent-blue" 
            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          ></div>
        </div>
        <div 
          key={currentStep}
          onClick={handleContentClick}
          className={`relative flex flex-col items-center text-center cursor-pointer animate-fade-in ${isPaused ? 'shadow-lg' : ''}`}
        >
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-full text-accent-blue mb-6">
            <Step.icon className="h-20 w-20" />
          </div>
          <h3 className="font-bold text-2xl text-dark-charcoal mb-2">{Step.title}</h3>
          <p className="text-lg text-gray-600 max-w-lg">{Step.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-bg-light-gray py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark-charcoal">Our Services</h2>
          <ServiceSlider services={serviceItems} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark-charcoal">How we Work</h2>
          <AnimatedHowItWorksSection steps={howItWorksItems} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark-charcoal">Why Choose Us</h2>
          <WhyChooseUsSection features={whyChooseUsItems} />
        </div>
      </div>
    </section>
  );
};

export default Services;