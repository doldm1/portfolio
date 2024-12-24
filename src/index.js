import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Hero from './components/hero'; 
import Projects from './components/projects'; 
import About from './components/about';
import Navigation from './components/navigation';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
    return (
        <div>
            <Navigation />
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);