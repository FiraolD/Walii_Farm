'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Raised With Care, Exceptionally Tender",
    subtitle: "At Waliin Farm, our cattle graze freely on nutrient-rich pastures, resulting in beef of unmatched quality and flavor.",
    buttonText: "See Gallery",
    image: "/images/avatar1.jpg"
  },
  {
    id: 2,
    title: "From Pasture to Plate with Integrity",
    subtitle: "We oversee every step—from breeding to butchering—ensuring humane treatment, sustainability, and traceability you can trust.",
    buttonText: "See Gallery",
    image: "/images/kitchen.jpg"
  },
  {
    id: 3,
    title: "Premium Beef, Proudly Ethiopian",
    subtitle: "Grass-fed, hormone-free, and dry-aged to perfection—Waliin Farm delivers premium cuts to markets and tables across Ethiopia.",
    buttonText: "See Gallery",
    image: "/images/garden.jpg"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 800);
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 800);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 800);
  };

  const current = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-blue-900/10 to-amber-900/15 z-0"></div>
      
      {/* SLIDES CONTAINER with Enhanced Transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0'
            } ${isTransitioning ? 'blur-sm' : 'blur-0'}`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-10000 ease-linear hover:scale-105"
              priority
              quality={100}
            />
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-900/10 to-amber-900/10 mix-blend-overlay"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-200/10 rounded-full blur-2xl animate-float-delayed"></div>

      {/* Content Container */}
      <div className="container relative z-20 text-white">
        <div className={`transform transition-all duration-1000 ease-out ${
          isTransitioning 
            ? 'translate-y-8 opacity-0' 
            : 'translate-y-0 opacity-100'
        } ${isLoaded ? 'scale-100' : 'scale-95'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">Luxury Farmhouse Experience</span>
          </div>

          {/* Main Title with Gradient Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 max-w-4xl leading-tight">
            <span className="bg-gradient-to-r from-white via-amber-100 to-emerald-200 bg-clip-text text-transparent">
              {current.title.split(' ').slice(0, -1).join(' ')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-200 to-emerald-300 bg-clip-text text-transparent">
              {current.title.split(' ').slice(-1)}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed text-white/90 font-light">
            {current.subtitle}
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button className="group relative bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden">
              <span className="relative z-10 flex items-center">
                {current.buttonText}
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  href='/gallery'
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            {/* <button className="group flex items-center text-white/80 hover:text-white font-medium py-4 px-6 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Our Story
            </button> */}
          </div>
        </div>
      </div>

      {/* Enhanced Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-end space-y-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group flex items-center space-x-3"
          >
            <span className={`text-sm font-medium text-white/70 group-hover:text-white transition-all duration-300 transform ${
              index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
            }`}>
              {slides[index].title.split(' ')[0]}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-8 bg-gradient-to-r from-amber-400 to-emerald-400 shadow-lg' 
                : 'bg-white/50 hover:bg-white/80 group-hover:w-4'
            }`} />
          </button>
        ))}
      </div>

      {/* Enhanced Arrows */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 group"
        aria-label="Previous slide"
      >
        <div className="flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:border-white/40">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>
      
      <button 
        onClick={handleNextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 group"
        aria-label="Next slide"
      >
        <div className="flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:border-white/40">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-light">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/80 to-transparent"></div>
        </div>
      </div>

      {/* Add these styles to your global CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 25s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 1s ease-out; }
      `}</style>
    </section>
  );
}