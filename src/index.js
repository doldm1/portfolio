import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';

function Header() {
    return <header style={{ gridArea: 'header' }}>Header</header>;
}

function LeftSide() {
    return <aside style={{ gridArea: 'left-side' }}>Left Side</aside>;
}

function Main() {
    return <main style={{ gridArea: 'main' }}>Main Content</main>;
}

function RightSide() {
    return <aside style={{ gridArea: 'right-side' }}>Right Side</aside>;
}

function Footer() {
    return <footer style={{ gridArea: 'footer' }}>Footer</footer>;
}

function App() {
    return (
        <div className="parent">
            <Header />
            <LeftSide />
            <Main />
            <RightSide />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));