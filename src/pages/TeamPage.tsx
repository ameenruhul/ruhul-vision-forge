
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TeamPage = () => {
  useEffect(() => {
    document.title = "Our Team | Ruhul Engineering";
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Anik Rahman",
      role: "Founder & Lead Engineer",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=400",
      bio: "Electrical engineering graduate with 7+ years of experience in hardware design and IoT solutions. Passionate about building tech that solves real problems for rural communities."
    },
    {
      name: "Fatima Begum",
      role: "Software Architect",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=400",
      bio: "Computer science expert specializing in embedded systems and mobile applications. Leads our firmware development and cloud integration efforts."
    },
    {
      name: "Mohammed Karim",
      role: "Hardware Prototyping Specialist",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=400",
      bio: "Mechanical engineer with expertise in 3D printing and CNC machining. Transforms our designs from concept to physical reality with precision and creativity."
    },
    {
      name: "Shirin Akter",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=400",
      bio: "Business administration graduate bringing organization and structure to our R&D processes. Ensures our projects stay on track from ideation to deployment."
    },
    {
      name: "Tareq Hossain",
      role: "Field Testing Coordinator",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=400",
      bio: "Agricultural science background with deep connections to farming communities. Oversees field trials and gathers critical feedback from end users."
    },
    {
      name: "Nusrat Jahan",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzY1MDc5Mg&ixlib=rb-4.0.3&q=80&w=400",
      bio: "Fine arts and digital design graduate who ensures our products are intuitive and accessible for users with varying levels of tech literacy."
    }
  ];

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

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 inline-flex">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold mb-4 hero-title">
            Our <span className="neon-gradient-text">Team</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-16 max-w-3xl">
            Meet the passionate minds behind Ruhul Engineering - a diverse group of engineers, designers, and problem-solvers dedicated to creating technologies that empower local communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-square overflow-hidden rounded-lg mb-4 neon-border">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-neon-red mb-3">{member.role}</p>
                <p className="text-white/70">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 glass-card p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-white/70 mb-4">
              We're always looking for passionate, creative individuals who want to build solutions for real problems. If you're interested in joining our mission, reach out to us.
            </p>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-neon-gradient hover:opacity-90 transition-opacity rounded-md inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
