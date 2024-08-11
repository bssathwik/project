import React, { useState } from 'react';
import './App.css'; // Main CSS file
import Header from './components/Header';
import Footer from './components/Footer';
import BookingSection from './components/BookingSection';
import Program from './components/Program';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import UpcomingWebinars from './UpcomingWebinars';
import FeaturedServices from './components/FeaturedServices';
import Articles from './components/Articles';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const closeModal = () => {
        setShowLogin(false);
        setShowRegister(false);
    };

    const handleRegisterClick = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    return (
        <div className="App">
            <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
            <Header />
            <div id="hero">
                <h2>Unlock Your Potential</h2>
                <p>Join our mental training programs designed to enhance your performance and well-being.</p>
                <a href="#programs" className="cta-button">Explore Programs</a>
            </div>
            <Program />
            <BookingSection />
            <About />
            <UpcomingWebinars />
            <Testimonials />
            <Footer />

            {showLogin && <Login onClose={closeModal} />}
            {showRegister && <Register onClose={closeModal} />}
        </div>
    );
};

export default App;
