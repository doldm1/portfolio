import React, { useState, useEffect } from 'react';

const getWeatherCondition = (code) => {
  const conditions = {
    0: 'Klar',
    1: 'Überwiegend klar',
    2: 'Teilweise bewölkt',
    3: 'Bewölkt',
    45: 'Neblig',
    48: 'Neblig mit Reif',
    51: 'Leichter Nieselregen',
    53: 'Mäßiger Nieselregen',
    55: 'Starker Nieselregen',
    61: 'Leichter Regen',
    63: 'Mäßiger Regen',
    65: 'Starker Regen',
    71: 'Leichter Schneefall',
    73: 'Mäßiger Schneefall',
    75: 'Starker Schneefall',
    77: 'Schneegriesel',
    80: 'Leichte Regenschauer',
    81: 'Mäßige Regenschauer',
    82: 'Starke Regenschauer',
    85: 'Leichte Schneeschauer',
    86: 'Starke Schneeschauer',
    95: 'Gewitter',
    96: 'Gewitter mit Hagel',
    99: 'Gewitter mit starkem Hagel'
  };
  return conditions[code] || 'Keine Daten';
};

const Footer = () => {
  const [aareTemp, setAareTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Aare temperature
        const aareResponse = await fetch('https://aareguru.existenz.ch/v2018/current?city=bern');
        const aareData = await aareResponse.json();
        setAareTemp(aareData);

        // Fetch weather data for Bern using Open-Meteo
        const weatherResponse = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=46.9481&longitude=7.4474&current=temperature_2m,weathercode&timezone=auto'
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top wave separator */}
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-48 transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-900"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Marcel</h3>
            <p className="text-gray-400 mb-4">
              UI/UX Designer & Digital Creator aus Bern.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Weather Section */}
          <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Wetter Bern</h3>
            {loading ? (
              <p className="text-gray-400">Loading weather data...</p>
            ) : weather ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Temperatur</span>
                  <span className="text-2xl">{weather.current?.temperature_2m}°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Bedingungen</span>
                  <span>{getWeatherCondition(weather.current?.weathercode)}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">Weather data unavailable</p>
            )}
          </div>

          {/* Aare Temperature Section */}
          <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Aare Temperatur</h3>
            {loading ? (
              <p className="text-gray-400">Loading Aare data...</p>
            ) : aareTemp ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Wasser Temperatur</span>
                  <span className="text-2xl">{aareTemp.aare.temperature}°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Fliessgeschwindigkeit</span>
                  <span>{aareTemp.aare.flow} m³/s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Wassertemperatur Status</span>
                  <span className="capitalize">{aareTemp.aare.temperature_text}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">Aare data unavailable</p>
            )}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Marcel. Alle Rechte vorbehalten.
            </p>
            <div className="mt-4 md:mt-0 text-gray-400 text-sm">
              Gestaltet & Entwickelt mit ❤️ in Bern in Zusammenarbeit mit claude.ai. Links in Socialmedia Icons und das Kontaktformular sind bewusst deaktiviert.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;