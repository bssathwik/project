import React from 'react';

const Articles = () => {
    return (
        <main>
            <section id="sports">
                <h2>Sports Articles</h2>
                <article>
                    <h3>The Importance of Physical Fitness</h3>
                    <p>Physical fitness is essential for a healthy lifestyle. It enhances mental health, boosts self-esteem, and reduces stress.</p>
                    <a href="#more" className="read-more">Read More</a>
                </article>
                <article>
                    <h3>How Sports Improve Teamwork</h3>
                    <p>Engaging in regular physical activity can lead to improved overall well-being.</p>
                    <a href="#more" className="read-more">Read More</a>
                </article>
                <div className="more-articles" id="more-sports">
                    <article>
                        <h3>Top 5 Exercises for Athletes</h3>
                        <p>Discover the best exercises to enhance athletic performance.</p>
                        <a href="#more" className="read-more">Read More</a>
                    </article>
                    <article>
                        <h3>The Science Behind Sports Nutrition</h3>
                        <p>Nutrition plays a crucial role in an athlete's performance.</p>
                        <a href="#more" className="read-more">Read More</a>
                    </article>
                </div>
                <a href="#more-sports" className="show-more">Show More</a>
            </section>
            {/* Other sections (psychology and mental training) would go here similarly */}
        </main>
    );
};

export default Articles;
