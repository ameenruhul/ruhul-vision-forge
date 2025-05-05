
import React from "react";
import { Zap, Cloud, Settings, Battery, Code, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Define products data that will be used across components
export const productsData = [
  {
    id: "ruhul-bikes-v1",
    category: "Clean Mobility",
    title: "Ruhul Bikes V1",
    description: "Torque-focused e-bike limited to 30 km/h for safe city deliveries. Subscription-ready to keep ownership costs minimal.",
    impact: "Lower operating cost for delivery riders; assembled 100% in Rajshahi.",
    icon: <Zap className="h-8 w-8" />,
    detailedDescription: "The Ruhul Bikes V1 is our flagship electric bike designed specifically for city delivery riders. With a focus on torque rather than speed, it provides the power needed to carry loads while maintaining safety with a 30 km/h speed limit. Our subscription model keeps upfront costs low, allowing riders to pay as they earn.",
    specifications: [
      "Range: 60-80 km per charge",
      "Battery: 48V 20Ah Lithium-ion",
      "Motor: 500W hub motor with regenerative braking",
      "Max Load: 150 kg",
      "Charging Time: 4-5 hours",
      "Smart Features: GPS tracking, anti-theft system"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600"
    ]
  },
  {
    id: "pump-controller",
    category: "Smart Agriculture",
    title: "Mobile-Call Pump Controller",
    description: "Start/stop irrigation pumps via a ₳1,000 feature phone; Bengali voice prompts + SMS power alerts.",
    impact: "Saves farmers hours of travel and eliminates crop-loss from unexpected outages.",
    icon: <Cloud className="h-8 w-8" />,
    detailedDescription: "Our Mobile-Call Pump Controller allows farmers to remotely manage irrigation pumps using even the most basic feature phones. With Bengali voice prompts and SMS alerts for power outages, this affordable solution saves hours of travel time and protects crops from water shortages.",
    specifications: [
      "Compatible with: Any feature phone or smartphone",
      "Communication: GSM network",
      "Power Source: Grid with battery backup",
      "Control Range: Up to 30km (network dependent)",
      "Voice Prompts: Bengali language",
      "Alerts: Power outages, pump status changes"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600"
    ]
  },
  {
    id: "bat-leaf-curing",
    category: "Agro-IoT",
    title: "BAT Leaf-Curing Panel",
    description: "Touchscreen, keypad, and cloud dashboard to manage barn humidity & temperature.",
    impact: "Higher yield and quality for 50k+ tobacco farmers nationwide.",
    icon: <Settings className="h-8 w-8" />,
    detailedDescription: "The BAT Leaf-Curing Panel is a sophisticated control system for tobacco curing barns, allowing precise management of temperature and humidity through an intuitive interface. With both touchscreen and keypad controls plus remote monitoring via a cloud dashboard, farmers can achieve optimal curing conditions.",
    specifications: [
      "Display: 7-inch touchscreen with backup keypad",
      "Sensors: Temperature, humidity, air quality",
      "Connectivity: Wifi/GSM with cloud integration",
      "Control: Automated flue dampers and heating systems",
      "Monitoring: Real-time and historical data",
      "Remote Access: Web and mobile app interfaces"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600"
    ]
  },
  {
    id: "ips-box",
    category: "Off-Grid Power",
    title: "IPS Box",
    description: "200W safe output; target price < 15k BDT.",
    impact: "Affordable backup power for shops and lower-middle-income homes.",
    icon: <Battery className="h-8 w-8" />,
    detailedDescription: "Our IPS (Instant Power Supply) Box provides reliable backup power at an affordable price point. Designed specifically for small shops and lower-middle-income households, it delivers 200W of clean power - enough to keep essential lights, fans, and small appliances running during outages.",
    specifications: [
      "Output: 200W continuous, 300W peak",
      "Battery: 12V 20Ah maintenance-free",
      "Runtime: 4-6 hours depending on load",
      "Charging: Automatic when grid power returns",
      "Protection: Overcharge, over-discharge, short circuit",
      "Price Target: Under 15,000 BDT"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600"
    ]
  },
  {
    id: "trainer-boards",
    category: "STEM Education",
    title: "University Trainer Boards",
    description: "Gives engineering students hands-on experience with locally fabricated circuits.",
    impact: "Building the next generation of hardware engineers right here in Bangladesh.",
    icon: <Code className="h-8 w-8" />,
    detailedDescription: "Our University Trainer Boards provide hands-on experience with real electronic circuits for engineering students. Locally designed and fabricated, these boards are more affordable than imported alternatives while being customized to the Bangladeshi engineering curriculum.",
    specifications: [
      "Variants: Digital Logic, Microcontroller, Power Electronics",
      "Components: Industry-standard ICs and discrete components",
      "Documentation: Comprehensive workbooks and examples",
      "Durability: Reinforced for classroom use",
      "Support: Online resources and technical assistance",
      "Local Production: 100% made in Bangladesh"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600"
    ]
  },
  {
    id: "future-projects",
    category: "On-Deck R&D",
    title: "Future Projects",
    description: "IoT fish-pond monitor • Leaf-clipping machine • Digital-twin high-tech barn",
    impact: "Pipeline of solutions tackling fisheries, labor efficiency, and precision curing.",
    icon: <Star className="h-8 w-8" />,
    detailedDescription: "Our R&D pipeline includes several promising technologies currently in development. From IoT systems to monitor fish pond conditions to automated leaf-clipping machines that reduce manual labor, and digital twin technology for high-tech barns - we're constantly exploring new ways to solve local challenges.",
    specifications: [
      "IoT Fish Pond Monitor: Water quality, temperature, oxygen levels",
      "Leaf-Clipping Machine: Automated processing of tobacco leaves",
      "Digital-Twin Barn: Complete simulation and optimization system",
      "Development Stage: Prototyping and field testing",
      "Projected Release: 2023-2024",
      "Collaborators: Local universities and industry partners"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600"
    ]
  }
];

// Additional products
export const additionalProducts = [
  {
    id: "iot-smart-switch",
    title: "IOT SMART SWITCH",
    description: "Control your devices remotely with our smart switch technology. Designed for reliability and ease of use, perfect for homes and businesses in Bangladesh.",
    detailedDescription: "Our IoT Smart Switch brings home automation to Bangladeshi households at an affordable price point. Control appliances remotely via smartphone app or automate them with schedules. Built with local power conditions in mind, it includes surge protection and works reliably even with unstable connections.",
    specifications: [
      "Connectivity: WiFi with mesh network capability",
      "Control: Mobile app, voice assistants (optional)",
      "Capacity: 10A for standard loads, 16A version available",
      "Installation: Compatible with standard junction boxes",
      "Features: Power monitoring, scheduling, scene settings",
      "Protection: Surge protection, overload detection"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600"
    ]
  },
  {
    id: "iot-gas-sensor",
    title: "IOT GAS SENSOR",
    description: "Advanced sensing technology for early detection of gas leaks. Provides real-time alerts to your phone, helping prevent accidents and save lives.",
    detailedDescription: "Our IoT Gas Sensor provides critical safety for homes and businesses using LPG gas. It detects leaks early and sends instant alerts to your phone, potentially averting dangerous situations. With local power backup and multiple notification methods, it offers reliable protection even during outages.",
    specifications: [
      "Detection: LPG, natural gas, carbon monoxide",
      "Sensitivity: Adjustable, follows international safety standards",
      "Alerts: Mobile notifications, local siren, SMS backup",
      "Power: Mains with 24-hour battery backup",
      "Installation: Wall-mounted, plug & play setup",
      "Additional: Temperature monitoring, historical data"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=600"
    ]
  }
];

const ProductsSection = () => {
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
          {productsData.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index} className="glass-card p-6 hover:-translate-y-1 transition-transform block">
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
            </Link>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalProducts.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index} className="glass-card p-6 hover:-translate-y-1 transition-transform block">
              <h3 className="text-2xl font-bold mb-4 neon-gradient-text">{product.title}</h3>
              <p className="text-white/70">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
