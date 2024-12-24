import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Hero from './components/hero'; 
import Projects from './components/projects'; 
import About from './components/about';

function Contact() {
    return (
        <section className="contact">
            <h2>Contact</h2>
            <p>Email me at: contact@example.com</p>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Hero />   
            <About />
            <Projects /> 
            <Contact />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);