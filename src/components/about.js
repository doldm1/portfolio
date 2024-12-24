import React, { useState, useEffect } from 'react';

const About = () => {
  const [joke, setJoke] = useState('');
  const [weather, setWeather] = useState(null);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch a random programming joke
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
      .then(res => res.json())
      .then(data => {
        const jokeText = data.type === 'single' ? data.joke : `${data.setup} ${data.delivery}`;
        setJoke(jokeText);
      })
      .catch(() => setJoke('Loading jokes... 😄'));

    // Fetch an inspirational quote
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data.content))
      .catch(() => setQuote('Loading quote...'));
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Professional Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-indigo-600">What I Do</h3>
            <p className="text-gray-700 leading-relaxed">
              I'm passionate about creating user-centered designs that make technology more accessible and enjoyable. 
              With a background in UI/UX design, I focus on creating intuitive and beautiful digital experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-indigo-600">Design Tools</h4>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Sketch</li>
                  <li>Photoshop</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-indigo-600">Skills</h4>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>UI Design</li>
                  <li>UX Research</li>
                  <li>Prototyping</li>
                  <li>User Testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Info & Fun Elements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-indigo-600">Fun Stuff</h3>
            
            {/* Random Programming Joke */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-indigo-600 mb-2">Random Dev Joke</h4>
              <p className="text-gray-700 italic">{joke}</p>
            </div>

            {/* Inspirational Quote */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-indigo-600 mb-2">Daily Inspiration</h4>
              <p className="text-gray-700 italic">{quote}</p>
            </div>

            {/* Hobbies */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-indigo-600 mb-2">When I'm Not Designing</h4>
              <p className="text-gray-700">
                You can find me exploring new coffee shops, capturing moments through photography, 
                or working on personal creative projects. I believe that these diverse interests 
                help fuel my creativity in design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;