
import React from "react";
import { Zap, Cloud, Settings, Battery, Code, Star } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      category: "Clean Mobility",
      title: "Ruhul Bikes V1",
      description: "Torque-focused e-bike limited to 30 km/h for safe city deliveries. Subscription-ready to keep ownership costs minimal.",
      impact: "Lower operating cost for delivery riders; assembled 100% in Rajshahi.",
      icon: <Zap className="h-8 w-8" />
    },
    {
      category: "Smart Agriculture",
      title: "Mobile-Call Pump Controller",
      description: "Start/stop irrigation pumps via a ₳1,000 feature phone; Bengali voice prompts + SMS power alerts.",
      impact: "Saves farmers hours of travel and eliminates crop-loss from unexpected outages.",
      icon: <Cloud className="h-8 w-8" />
    },
    {
      category: "Agro-IoT",
      title: "BAT Leaf-Curing Panel",
      description: "Touchscreen, keypad, and cloud dashboard to manage barn humidity & temperature.",
      impact: "Higher yield and quality for 50k+ tobacco farmers nationwide.",
      icon: <Settings className="h-8 w-8" />
    },
    {
      category: "Off-Grid Power",
      title: "IPS Box",
      description: "200W safe output; target price < 15k BDT.",
      impact: "Affordable backup power for shops and lower-middle-income homes.",
      icon: <Battery className="h-8 w-8" />
    },
    {
      category: "STEM Education",
      title: "University Trainer Boards",
      description: "Gives engineering students hands-on experience with locally fabricated circuits.",
      impact: "Building the next generation of hardware engineers right here in Bangladesh.",
      icon: <Code className="h-8 w-8" />
    },
    {
      category: "On-Deck R&D",
      title: "Future Projects",
      description: "IoT fish-pond monitor • Leaf-clipping machine • Digital-twin high-tech barn",
      impact: "Pipeline of solutions tackling fisheries, labor efficiency, and precision curing.",
      icon: <Star className="h-8 w-8" />
    }
  ];

  return (
    <section id="products" className="section-padding bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="neon-gradient-text">Research & Products</span>
        </h2>
        <p className="text-center text-white/70 max-w-3xl mx-auto mb-12">
          Every prototype we ship solves a problem our own communities face. From electric bikes to IoT controllers, 
          we're building solutions that make a real difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="glass-card p-6 hover:-translate-y-1 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-neon-yellow">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-sm text-neon-red font-medium">{product.category}</h3>
                  <h4 className="text-xl font-bold">{product.title}</h4>
                </div>
              </div>
              <p className="text-white/70 mb-4">{product.description}</p>
              <div className="pt-4 border-t border-white/10">
                <h5 className="text-sm font-semibold mb-1">Why It Matters:</h5>
                <p className="text-white/70">{product.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold mb-4 neon-gradient-text">IOT SMART SWITCH</h3>
            <p className="text-white/70">
              Control your devices remotely with our smart switch technology. Designed for reliability and ease of use, 
              perfect for homes and businesses in Bangladesh.
            </p>
          </div>
          <div className="glass-card p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold mb-4 neon-gradient-text">IOT GAS SENSOR</h3>
            <p className="text-white/70">
              Advanced sensing technology for early detection of gas leaks. Provides real-time alerts to your phone, 
              helping prevent accidents and save lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
