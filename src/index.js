import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';

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

function Hero() {
    return (
        <section className="hero">
            <h1>Welcome to My Website</h1>
            <p>Creating modern, scalable, and clean web designs.</p>
            <button className="cta-button">Get in Touch</button>
        </section>
    );
}

function About() {
    return (
        <section className="about">
            <h2>About Me</h2>
            <p>
                I am passionate about web development, combining creativity and
                functionality to build exceptional user experiences.
            </p>
        </section>
    );
}

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-card">Project 1</div>
                <div className="project-card">Project 2</div>
                <div className="project-card">Project 3</div>
            </div>
        </section>
    );
}

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);