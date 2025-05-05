
import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Gradient background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-red opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-yellow opacity-20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="neon-gradient-text">Get Involved</span>
        </h2>
        <p className="text-center text-white/70 max-w-3xl mx-auto mb-12">
          Let's build the future, right here at home. Join us as we create technology 
          that empowers our communities and drives prosperity in Bangladesh.
        </p>

        <div className="glass-card max-w-3xl mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 border border-white/10 rounded-lg hover:border-neon-yellow/30 transition-colors">
              <h3 className="font-bold mb-2">Invest</h3>
              <p className="text-white/70 text-sm">
                Support our mission to create innovative, locally-made solutions.
              </p>
            </div>
            <div className="text-center p-4 border border-white/10 rounded-lg hover:border-neon-yellow/30 transition-colors">
              <h3 className="font-bold mb-2">Distribute</h3>
              <p className="text-white/70 text-sm">
                Help us bring our products to communities across Bangladesh.
              </p>
            </div>
            <div className="text-center p-4 border border-white/10 rounded-lg hover:border-neon-yellow/30 transition-colors">
              <h3 className="font-bold mb-2">Collaborate</h3>
              <p className="text-white/70 text-sm">
                Partner with us on research, development, or educational initiatives.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-4">Partner With Us</h3>
            
            <div className="space-y-2">
              <p className="font-medium">Manufacturers & Suppliers:</p>
              <p className="text-white/70">Help us localize more components.</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">NGOs & Impact Funds:</p>
              <p className="text-white/70">Scale our farmer-centric tech to new districts.</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">Universities & Makerspaces:</p>
              <p className="text-white/70">Bring our trainer boards or co-develop the next breakthrough.</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-8 border-t border-white/10">
              <a href="mailto:hello@ruhulegineering.com" className="flex items-center space-x-2 text-white/90 hover:text-neon-yellow">
                <Mail className="h-5 w-5" />
                <span>hello@ruhulegineering.com</span>
              </a>
              <a href="tel:+880XXXXXXXXXX" className="flex items-center space-x-2 text-white/90 hover:text-neon-yellow">
                <Phone className="h-5 w-5" />
                <span>+880 XXX XXX XXXX</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
