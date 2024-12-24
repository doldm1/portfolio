import React, { useState, useEffect } from 'react';

const About = () => {
  const [joke, setJoke] = useState('');
  const [quote, setQuote] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('.about-container'));

    // Fetch APIs
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
      .then(res => res.json())
      .then(data => {
        const jokeText = data.type === 'single' ? data.joke : `${data.setup} ${data.delivery}`;
        setJoke(jokeText);
      })
      .catch(() => setJoke('Loading jokes... 😄'));

    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data.content))
      .catch(() => setQuote('Loading quote...'));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-indigo-100 rounded-full transform rotate-45"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border-4 border-purple-100 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 about-container relative">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-20">
            <span className="font-cursive text-2xl text-indigo-600 block mb-4">Get to know me</span>
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
            {/* Professional Info */}
            <div className="space-y-10">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-cursive text-3xl text-indigo-600 mb-6">What I Do</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm passionate about creating user-centered designs that make technology more accessible and enjoyable. 
                  With a background in UI/UX design, I focus on creating intuitive and beautiful digital experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-cursive text-xl text-indigo-600 mb-6">Design Tools</h4>
                  <ul className="space-y-4">
                    {['Figma', 'Adobe XD', 'Sketch', 'Photoshop'].map((tool, index) => (
                      <li key={tool} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                        <span className="text-gray-700">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-cursive text-xl text-indigo-600 mb-6">Skills</h4>
                  <ul className="space-y-4">
                    {['UI Design', 'UX Research', 'Prototyping', 'User Testing'].map((skill, index) => (
                      <li key={skill} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Personal Info & Fun Elements */}
            <div className="space-y-10">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-cursive text-3xl text-indigo-600 mb-6">When I'm Not Designing</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  You can find me exploring new coffee shops, capturing moments through photography, 
                  or working on personal creative projects. I believe that these diverse interests 
                  help fuel my creativity in design.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-cursive text-xl text-indigo-600 mb-4">Random Dev Joke</h4>
                <p className="text-gray-700 italic text-lg">{joke}</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-cursive text-xl text-indigo-600 mb-4">Daily Inspiration</h4>
                <p className="text-gray-700 italic text-lg">{quote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;