
import React from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
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
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-neon-red/20 to-neon-yellow/20"></div>
      </div>
      
      {/* Animated circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-neon-red/20 rounded-full filter blur-3xl opacity-50 animate-pulse-soft"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-neon-yellow/20 rounded-full filter blur-3xl opacity-50 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="neon-gradient-text">OUR PEOPLE,</span>
          <br />
          <span className="neon-gradient-text">OUR SOLUTIONS</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-white/80">Proudly made in Rajshahi</h2>
        <p className="max-w-2xl mx-auto text-lg text-white/70 mb-12">
          We are Ruhul Engineering—an R&D house that turns audacious ideas into hardware and software 
          made entirely with local talent and materials. From electric bikes to IoT barn controllers, 
          every prototype we ship solves a problem our own communities face, today.
        </p>
        <button 
          onClick={handleScrollDown}
          className="p-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
