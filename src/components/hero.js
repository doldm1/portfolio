import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) / 35;
    const moveY = (clientY - centerY) / 35;
    setMousePosition({ x: moveX, y: moveY });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-white/10 rounded-full"></div>
      
      {/* Floating dots */}
      {[
        { x: 15, y: 20, size: 18 },
        { x: 85, y: 30, size: 22 },
        { x: 25, y: 60, size: 16 },
        { x: 80, y: 70, size: 20 },
        { x: 50, y: 45, size: 24 },
        { x: 35, y: 85, size: 17 },
        { x: 70, y: 15, size: 19 },
        { x: 90, y: 85, size: 21 },
        { x: 10, y: 40, size: 18 },
        { x: 60, y: 75, size: 20 }
      ].map((dot, index) => (
        <div
          key={`dot-${index}`}
          className="absolute rounded-full bg-white"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.6s ease-out',
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.y}%`,
            left: `${dot.x}%`,
            opacity: 0.2,
            animation: `float-${index} 8s infinite ease-in-out`
          }}
        />
      ))}

      {/* Content */}
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } z-10 text-center max-w-4xl px-4`}>
        <span className="text-white/70 font-cursive text-2xl mb-4 block">Willkommen zu meinem Portfolio</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          Hallo, ich bin <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Marcel </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center text-purple-100 font-light">
          UX/UI Designer & Digital Creator
        </p>
        <p className="text-lg mb-12 text-center text-purple-100/80 font-light max-w-2xl mx-auto leading-relaxed">
        Ich liebe es, intuitive und ansprechende digitale Erlebnisse zu schaffen, die eine Verbindung zu den Benutzer:innen herstellen und ihr Engagement fördern.
        </p>

        {/* Social Links with enhanced styling */}
        {/* Social Links with enhanced styling */}
<div className="flex gap-8 justify-center mb-12">
  <a 
    href="https://github.com/yourusername" 
    className="transform hover:scale-110 transition-all bg-white/10 p-4 rounded-full hover:bg-white/20 backdrop-blur-sm group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
         className="w-6 h-6 group-hover:stroke-purple-200 transition-colors">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  </a>
  <a 
    href="https://linkedin.com/in/yourusername" 
    className="transform hover:scale-110 transition-all bg-white/10 p-4 rounded-full hover:bg-white/20 backdrop-blur-sm group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
         className="w-6 h-6 group-hover:stroke-purple-200 transition-colors">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  </a>
  <a 
    href="mailto:your.email@example.com" 
    className="transform hover:scale-110 transition-all bg-white/10 p-4 rounded-full hover:bg-white/20 backdrop-blur-sm group"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
         className="w-6 h-6 group-hover:stroke-purple-200 transition-colors">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  </a>
</div>

        {/* Enhanced CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-3 rounded-full font-medium text-white overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 
                           bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:bg-gradient-to-r 
                           group-hover:from-purple-600 group-hover:to-indigo-600"></span>
            <span className="relative">Meine Projekte</span>
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 transform 
                           translate-y-1 bg-white/20 group-hover:translate-y-0"></span>
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Arrow */}
      <div 
        className="absolute bottom-8 animate-bounce cursor-pointer z-10 group"
        onClick={() => scrollToSection('about')}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="w-8 h-8 group-hover:stroke-purple-200 transition-colors">
          <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <style>
        {[...Array(10)].map((_, i) => `
          @keyframes float-${i} {
            0%, 100% { transform: translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px); }
            50% { transform: translate(${mousePosition.x * 0.5 + 30}px, ${(mousePosition.y * 0.5) - 30}px); }
          }
        `).join('\n')}
      </style>
    </section>
  );
};

export default Hero;