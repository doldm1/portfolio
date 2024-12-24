import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "One-pager showcasing comprehensive brand identity design system with detailed guidelines and visual elements.",
    tags: ["Branding", "Visual Design", "PDF"],
    image: "/api/placeholder/400/300",
    viewUrl: "#",
    type: "PDF Document"
  },
  {
    id: 2,
    title: "E-Commerce Website Design",
    description: "Complete website redesign focused on user experience and conversion optimization, with interactive prototypes.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    image: "/api/placeholder/400/300",
    viewUrl: "#",
    type: "Figma Design"
  },
  {
    id: 3,
    title: "Mobile App Interface",
    description: "Modern mobile app interface design prioritizing accessibility and user engagement through intuitive navigation.",
    tags: ["Mobile UI", "Interaction", "Figma"],
    image: "/api/placeholder/400/300",
    viewUrl: "#",
    type: "Mobile UI"
  }
];

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative overflow-hidden group">
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-64 object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/50 to-indigo-900/80 
                          flex items-center justify-center gap-4 transition-opacity duration-300
                          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <a 
              href={project.viewUrl}
              className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium
                         transform hover:scale-105 transition-all hover:shadow-lg
                         hover:bg-indigo-50 backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View {project.type}
            </a>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 
                           text-indigo-600 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
    return (
      <section className="py-32 relative overflow-hidden bg-blue-100">
        {/* Decorative Rings - matching style from other sections */}
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-blue-200/50 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-blue-200/50 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-blue-200/50 rounded-full transform rotate-12"></div>
  
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <span className="font-cursive text-2xl text-indigo-600 block mb-4">My Recent Work</span>
            <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;