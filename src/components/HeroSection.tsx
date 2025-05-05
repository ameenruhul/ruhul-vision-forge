
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}></div>
        </div>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-neon-red/20 rounded-full filter blur-3xl opacity-40 animate-pulse-soft"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-neon-yellow/20 rounded-full filter blur-3xl opacity-40 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-red/10 rounded-full filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
      
      <div 
        className={`container mx-auto px-4 z-10 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative inline-block mb-6">
          <span className="absolute -inset-1 bg-neon-gradient blur-lg opacity-50 rounded-lg"></span>
          <span className="relative px-4 py-1 text-sm font-medium bg-black/70 rounded-full border border-white/10">
            RUHUL ENGINEERING
          </span>
        </div>
        
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight">
          <span className="neon-gradient-text block">OUR PEOPLE,</span>
          <span className="neon-gradient-text block">OUR SOLUTIONS</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-8 text-white/80 font-light">Proudly made in Rajshahi</h2>
        
        <p className="max-w-2xl mx-auto text-lg text-white/70 mb-12">
          We are Ruhul Engineering—an R&D house that turns audacious ideas into hardware and software 
          made entirely with local talent and materials. From electric bikes to IoT barn controllers, 
          every prototype we ship solves a problem our own communities face, today.
        </p>
        
        <button 
          onClick={handleScrollDown}
          className="p-4 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-bounce"
          aria-label="Scroll down"
          style={{ animationDuration: '2s' }}
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
      
      {/* Tech pattern decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
