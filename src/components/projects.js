import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "One-pager showcasing comprehensive brand identity design system",
    tags: ["Branding", "Visual Design", "PDF"],
    image: "/api/placeholder/400/300",
    viewUrl: "#", // Link to your PDF
    type: "PDF Document"
  },
  {
    id: 2,
    title: "E-Commerce Website Design",
    description: "Complete website redesign with focus on user experience and conversion optimization",
    tags: ["UI/UX", "Figma", "Prototyping"],
    image: "/api/placeholder/400/300",
    viewUrl: "#", // Link to your Figma preview
    type: "Figma Design"
  },
  {
    id: 3,
    title: "Mobile App Interface",
    description: "Modern mobile app interface design with focus on accessibility and user engagement",
    tags: ["Mobile UI", "Interaction Design", "Figma"],
    image: "/api/placeholder/400/300",
    viewUrl: "#", // Link to your Figma mobile design
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
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-48 object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <a 
              href={project.viewUrl}
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View {project.type}
            </a>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">My Work</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent design projects showcasing UI/UX design, branding, and digital experiences.
        </p>
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