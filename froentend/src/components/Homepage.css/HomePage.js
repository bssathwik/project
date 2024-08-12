// HomePage.js

import React, { useState } from 'react';
import './Homepage.css'; // Assuming style.css is in the same directory
import { IonIcon } from 'react-ion-icon'; // Ensure to install react-ion-icon if you haven't

const HomePage = () => {
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isRegisterVisible, setRegisterVisible] = useState(false);

    const toggleLogin = () => setLoginVisible(!isLoginVisible);
    const toggleRegister = () => setRegisterVisible(!isRegisterVisible);

    return (
        <div>
            <nav>
                <ul>
                    <li><a className="a" href="#home">Home</a></li>
                    <li><a className="a" href="explore.html">Videos</a></li>
                    <li><a className="a" href="book_a_coaching.html">Coaching</a></li>
                    <li><a className="a" href="upcoww.html">Courses</a></li>
                    <li><a className="login" onClick={toggleLogin}>Login</a></li>
                </ul>
            </nav>
            <div className="container">
                <div className="home-card">
                    <h2 className="foldit">Master Your Mind, Elevate Your Game</h2>
                    <p>Unlock the power of psychology and mental training to push beyond your limits. Whether you're an elite athlete or just starting your journey, our expert-driven resources and tools are designed to help you achieve peak performance.</p>
                </div>
                {/* Login Form */}
                {isLoginVisible && (
                    <div className="wrapper">
                        <span className="icon-close" onClick={toggleLogin}><IonIcon name="close" /></span>
                        <div className="form-box">
                            <h2>Login</h2>
                            <form action="#">
                                <div className="input-box">
                                    <div className="label-align">
                                        <span className="icon"><IonIcon name="mail" /></span>
                                        <label>Email</label>
                                    </div>
                                    <input className="input" type="email" required />
                                </div>
                                <div className="input-box">
                                    <div className="label-align">
                                        <span className="icon"><IonIcon name="lock-closed" /></span>
                                        <label>Password</label>
                                    </div>
                                    <input className="input" type="password" required />
                                </div>
                                <div className="remember-forgot">
                                    <label><input type="checkbox" /> Remember me</label>
                                    <a href="#">Forget password?</a>
                                </div>
                                <button type="submit" id="btn">Login</button>
                                <div className="login-register">
                                    <p>Don't have an account? <a href="#" className="register-link" onClick={toggleRegister}>Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {/* Register Form */}
                {isRegisterVisible && (
                    <div className="wrapper2">
                        <span className="icon-close" onClick={toggleRegister}><IonIcon name="close" /></span>
                        <div className="form-box">
                            <h2>Register</h2>
                            <form action="#">
                                <div className="input-box">
                                    <div className="label-align">
                                        <span className="icon"><IonIcon name="person-circle-outline" /></span>
                                        <label>User Name</label>
                                    </div>
                                    <input className="input" type="text" required />
                                </div>
                                <div className="input-box">
                                    <div className="label-align">
                                        <span className="icon"><IonIcon name="mail" /></span>
                                        <label>Email</label>
                                    </div>
                                    <input className="input" type="email" required />
                                </div>
                                <div className="input-box">
                                    <div className="label-align">
                                        <span className="icon"><IonIcon name="lock-closed" /></span>
                                        <label>Password</label>
                                    </div>
                                    <input className="input" type="password" required />
                                </div>
                                <button type="submit" id="btn">Register</button>
                                <div className="login-register">
                                    <p>Already have an account? <a href="#" className="register-link" onClick={toggleLogin}>Login</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <div className="featured-services">
                <h2>Our Core Services</h2>
                <div className="services">
                    <Service
                        videoSrc="video1.mp4"
                        posterSrc="thumbnail1.jpg"
                        title="Mental Training Programs"
                        description="Unlock the power of your mind with our tailored mental training programs. Designed for athletes at all levels, our programs focus on enhancing mental fortitude, sharpening focus, and managing stress effectively."
                        link="explore.html"
                    />
                    <Service
                        videoSrc="video2.mp4"
                        posterSrc="thumbnail2.jpg"
                        title="Sports Psychology Coaching"
                        description="Overcome mental barriers and achieve your full potential with our personalized sports psychology coaching. Our expert coaches work closely with you to identify challenges, set clear goals, and develop strategies."
                        link="book_a_coaching.html"
                    />
                    <Service
                        videoSrc="video3.mp4"
                        posterSrc="thumbnail3.jpg"
                        title="Workshops & Webinars"
                        description="Join our interactive workshops and webinars led by top experts in sports psychology and mental training. These sessions provide valuable insights into the mental aspects of sports performance."
                        link="upcoww.html"
                    />
                </div>
            </div>
            <main>
                <Section title="Sports Articles" articles={sportsArticles} />
                <Section title="Psychology Articles" articles={psychologyArticles} />
                <Section title="Mental Training Articles" articles={mentalTrainingArticles} />
            </main>
        </div>
    );
};

// Service Component
const Service = ({ videoSrc, posterSrc, title, description, link }) => (
    <div className="service">
        <video controls poster={posterSrc}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="ex-a" href={link}><button>Explore</button></a>
    </div>
);

// Section Component
const Section = ({ title, articles }) => (
    <section>
        <h2>{title}</h2>
        {articles.map((article, index) => (
            <Article key={index} {...article} />
        ))}
    </section>
);

// Article Component
const Article = ({ title, content }) => (
    <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <a href="#more" className="read-more">Read More</a>
    </article>
);

// Sample Articles Data
const sportsArticles = [
    {
        title: "The Importance of Physical Fitness",
        content: "Physical fitness is essential for a healthy lifestyle. It enhances mental health, boosts self-esteem, and reduces stress."
    },
    {
        title: "How Sports Improve Teamwork",
        content: "Engaging in regular physical activity can lead to improved overall well-being."
    },
];

const psychologyArticles = [
    {
        title: "The Role of Psychology in Sports Performance",
        content: "Understanding psychological principles can help athletes perform better."
    },
    {
        title: "Overcoming Performance Anxiety",
        content: "Performance anxiety is common among athletes. Techniques can help manage anxiety."
    },
];

const mentalTrainingArticles = [
    {
        title: "Building Mental Toughness",
        content: "Mental toughness is a key factor in sports success."
    },
    {
        title: "The Benefits of Mindfulness for Athletes",
        content: "Mindfulness helps athletes stay present and focused."
    },
];

export default HomePage;
