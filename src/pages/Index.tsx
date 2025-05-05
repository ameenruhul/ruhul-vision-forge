
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import DreamSection from "../components/DreamSection";
import ProductsSection from "../components/ProductsSection";
import WhyChooseSection from "../components/WhyChooseSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Ruhul Engineering - Our People, Our Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10">
        {/* Background gradient elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-red/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-yellow/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-red/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neon-yellow/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DreamSection />
      <ProductsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
