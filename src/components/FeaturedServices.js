import React from 'react';

const FeaturedServices = () => {
    return (
        <div className="featured-services">
            <h2>Our Core Services</h2>
            <div className="services">
                <div className="service">
                    <video controls poster="thumbnail1.jpg">
                        <source src="video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Mental Training Programs</h3>
                    <p>Unlock the power of your mind with our tailored mental training programs.</p>
                    <a className="ex-a" href="explore.html">
                        <button>Explore Our Mental Training Programs</button>
                    </a>
                </div>
                <div className="service">
                    <video controls poster="thumbnail2.jpg">
                        <source src="video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Sports Psychology Coaching</h3>
                    <p>Overcome mental barriers and achieve your full potential with our personalized sports psychology coaching.</p>
                    <a className="ex-a" href="book_a_coaching.html">
                        <button>Book a Coaching Session</button>
                    </a>
                </div>
                <div className="service">
                    <video controls poster="thumbnail3.jpg">
                        <source src="video3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Workshops & Webinars</h3>
                    <p>Join our interactive workshops and webinars led by top experts in sports psychology and mental training.</p>
                    <a className="ex-a" href="upcoww.html">
                        <button>View Upcoming Workshops & Webinars</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeaturedServices;
