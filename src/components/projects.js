import React, { useState, useEffect } from 'react';
import onepagerPDF from '../../public/onepager.pdf';

const projects = [
    {
        id: 1,
        title: "One Pager Agile Verträge",
        description: "One Pager mit anspruchsvollem visuellem Look zum Thema Agile Verträge im Zusammenhang mit Agilität in Untenehmen.",
        tags: ["Branding", "Visual Design", "PDF"],
        image: "/api/placeholder/400/300",
        viewUrl: onepagerPDF,
        type: "PDF Document"
      },
  {
    id: 2,
    title: "Website Design Biodiversität Bern",
    description: "Ein Website Design in Figma für die Biodiversitätstage in Bern im Jahr 2024. Gestaltet als Teamprojekt and der BFH.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    image: "/api/placeholder/400/300",
    viewUrl: "https://www.figma.com/proto/ZX4J61hyvdvZ1pD8fUsmNG/Biodiversity-Days-Bern-24?node-id=1-2&p=f&t=SBMQ2cGtFpd4EEbI-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    type: "Figma Design"
  },
  {
    id: 3,
    title: "TrekMate Mobile App",
    description: "Interface Design einer Mobile App für Wanderer und Outdoor Enthusiasten, mit Fokus auf Benutzerfreundlichkeit und intuitive Navigation.",
    tags: ["Mobile UI", "Interaction", "Figma"],
    image: "/api/placeholder/400/300",
    viewUrl: "https://www.figma.com/proto/dywvApW9dhl3aaVhNK6mig/TrekMate?node-id=13-28&p=f&t=48tde9KY2NLfmUd8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A28",
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

  // Handle click to open PDF in new tab
  const handleClick = (e) => {
    e.preventDefault();
    window.open(project.viewUrl, '_blank', 'noopener,noreferrer');
  };

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
        <div 
            className={`w-full h-64 transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
            }`}
            style={{ 
            backgroundColor: project.id === 1 ? '#FFA500' : // Orange
                            project.id === 2 ? '#FF4444' : // Red
                            '#4CAF50'                      // Green
            }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/50 to-indigo-900/80 
                        flex items-center justify-center gap-4 transition-opacity duration-300
                        ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button 
            onClick={handleClick}
            className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium
                        transform hover:scale-105 transition-all hover:shadow-lg
                        hover:bg-indigo-50 backdrop-blur-sm"
            >
            View {project.type}
            </button>
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
          <span className="font-cursive text-2xl text-indigo-600 block mb-4">Meine aktuellen Arbeiten</span>
          <h2 className="text-5xl font-bold mb-6">Ausgewählte Projekte</h2>
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