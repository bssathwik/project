import React, { useState } from 'react';
import './Style.css';
import '@fontsource/bebas-neue';
import '@fontsource/foldit';
// import { Box, Link } from '@chakra-ui/react';
import BookingSection from './BookingSection/BookingSection';
import LoginForm from './LoginForm';
import Register from './Register';

const MyComponent = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
    const toggleRegister = () => setIsRegisterOpen(!isRegisterOpen);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a className="a" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="a" href="#videos">
                            Videos
                        </a>
                    </li>
                    <li>
                        <a className="a" href="/bookingsection">
                            Videos
                        </a>
                    </li>
                    <li>
                        <a className="a" href="#courses">
                            Courses
                        </a>
                    </li>
                    <li> 
                     <Box as="li">
                        <Link className="a" href="/login">
                            Login
                        </Link>
                    </Box>
                    </li>
                </ul>
            </nav>

            <div className="container">
                <div className="home-card">
                    <h2 className="foldit">Master Your Mind, Elevate Your Game</h2>
                    <p>
                        Unlock the power of psychology and mental training to push beyond your
                        limits. Whether you're an elite athlete or just starting your journey, our
                        expert-driven resources and tools are designed to help you achieve peak
                        performance.
                    </p>
                </div>

                {isLoginOpen && <LoginForm onClose={toggleLogin} />}
                {isRegisterOpen && <Register onClose={toggleRegister} />}
            </div>

            {/* Rest of your JSX code */}
        </div>
    );
};

export default MyComponent;