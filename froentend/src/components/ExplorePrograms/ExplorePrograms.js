import React from 'react';
import './explore_style.css'; // Ensure this path is correct for your project

const ExplorePrograms = () => (
  <div>
    {/* Header */}
    <header>
      <h1>Explore Our Mental Training Programs</h1>
      <nav>
        <ul>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    {/* Hero Section */}
    <section id="hero">
      <h2>Unlock Your Potential</h2>
      <p>Join our mental training programs designed to enhance your performance and well-being.</p>
      <a href="#programs" className="cta-button">Explore Programs</a>
    </section>

    {/* Programs Section */}
    <section id="programs">
      <h2>Our Programs</h2>
      {[
        {
          videoSrc: "https://www.youtube.com/embed/Z2dK_m2LfrY?si=UGr6HTHEpepFLGk0&amp;controls=0",
          title: "Program 1: Mindfulness for Athletes",
          description: "Our Mindfulness for Athletes program teaches techniques to improve focus, reduce anxiety, and promote overall mental well-being through mindful practices."
        },
        {
          videoSrc: "https://www.youtube.com/embed/r5_9RuUOtSI?si=p4LC5gDYeWp_Etfp",
          title: "Program 2: Visualization Techniques",
          description: "This program guides you in using visualization strategies to enhance your performance and achieve your goals, helping you mentally rehearse your success."
        },
        {
          videoSrc: "https://www.youtube.com/embed/t1F7EEGPQwo?si=fBVvEnxLCLDjXDNb",
          title: "Program 3: Goal Setting Mastery",
          description: "Master the art of setting and achieving personal and professional goals with proven strategies that foster motivation and accountability."
        },
        {
          videoSrc: "https://www.youtube.com/embed/fH7N9YRxMYc?si=VqvVMiz17NhUxzMt",
          title: "Program 4: Concentration and Focus Training",
          description: "Enhance your concentration and focus with techniques that help you stay in the zone during training and competition."
        },
        {
          videoSrc: "https://www.youtube.com/embed/71_NkXgAK1g?si=lL8quU9wRt_wGzeu",
          title: "Program 5: Positive Self-Talk Strategies",
          description: "Develop positive self-talk strategies to boost confidence and maintain a constructive mindset."
        },
        {
          videoSrc: "https://www.youtube.com/embed/vpO_3ZegQL4?si=kvksqRovF1YGe0kb",
          title: "Program 6: Stress Management Techniques",
          description: "Learn effective stress management techniques to maintain composure and improve performance under pressure."
        },
        {
          videoSrc: "https://www.youtube.com/embed/VNCL1glwyOI?si=0_CuQeDpQIeXOLrb",
          title: "Program 7: Building Mental Resilience",
          description: "This program focuses on developing mental resilience, helping you bounce back from setbacks and stay motivated in the face of challenges."
        },
        {
          videoSrc: "https://www.youtube.com/embed/SCbifUfr-js?si=HnTmZwdzOh6oEfFc",
          title: "Program 8: Emotion Regulation Techniques",
          description: "Learn how to regulate your emotions effectively to enhance performance and manage competition-related stress."
        },
        {
          videoSrc: "https://www.youtube.com/embed/ILDy6kYU-xQ?si=pTJ1e_UfDAbx7ME6",
          title: "Program 9: Mind-Body Connection",
          description: "Explore the powerful connection between your mind and body to optimize performance through mental training and physical preparation."
        },
        {
          videoSrc: "https://www.youtube.com/embed/uzDsT-25w14?si=z-_ufqMYvH4ofAbN",
          title: "Program 10: Recovery and Reflection Techniques",
          description: "Discover recovery strategies that include reflection and self-assessment to improve future performance and maintain mental health."
        }
      ].map((program, index) => (
        <div key={index} className="program">
          <iframe
            width="560"
            height="315"
            src={program.videoSrc}
            title={program.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="program-inner">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        </div>
      ))}
    </section>

    {/* About Us Section */}
    <section id="about">
      <h2>About Us</h2>
      <p>At [Your Organization Name], we are passionate about empowering athletes and individuals to reach their full mental potential. Our dedicated team of experts, comprised of sports psychologists, mental performance coaches, and wellness professionals, brings years of experience in the field of sports psychology and mental training.</p>
      
      <p>Our mission is to provide accessible, evidence-based mental training programs that help our clients enhance their performance, boost their resilience, and cultivate a positive mindset. We believe that mental strength is just as crucial as physical ability, and our goal is to bridge that gap through comprehensive training methods tailored to the unique needs of each individual.</p>
      
      <p>We offer a range of programs that focus on different aspects of mental training, including mindfulness, visualization, stress management, and goal setting. Whether you are an elite athlete, a weekend warrior, or someone looking to improve your mental fitness, we have a program designed for you.</p>
      
      <h3>Our Values</h3>
      <ul>
        <li><strong>Integrity:</strong> We prioritize ethical practices and transparency in all our programs.</li>
        <li><strong>Excellence:</strong> We strive for excellence in our training methods and the results we deliver.</li>
        <li><strong>Inclusivity:</strong> We welcome individuals from all backgrounds and skill levels, ensuring our programs are accessible to everyone.</li>
        <li><strong>Empowerment:</strong> We empower our clients with the tools and knowledge to take control of their mental training journey.</li>
      </ul>
  
      <h3>Meet Our Team</h3>
      <p>Our diverse team is committed to helping you succeed:</p>
      <ul>
        <li><strong>Dr. Jane Smith:</strong> A licensed sports psychologist with over 15 years of experience working with professional athletes. Jane specializes in mindfulness and performance psychology.</li>
        <li><strong>John Doe:</strong> A mental performance coach and former athlete who focuses on visualization techniques and mental resilience. John has a passion for helping others unlock their potential.</li>
        <li><strong>Lisa Johnson:</strong> A wellness expert and certified meditation instructor. Lisa guides our mindfulness programs and emphasizes the importance of mental well-being in athletic performance.</li>
      </ul>
  
      <p>Join us at [Your Organization Name] and take the first step towards unlocking your mental potential. Together, we can create a positive mindset that enhances your performance and overall well-being.</p>
    </section>

    {/* Testimonials Section */}
    <section id="testimonials">
      <h2>What Our Clients Say</h2>
      {[
        {
          quote: "The mindfulness program changed my approach to competition. I feel more focused and calm than ever!",
          author: "Alex, Professional Athlete"
        },
        {
          quote: "The visualization techniques helped me achieve my personal best. I can't recommend this enough!",
          author: "Jamie, Fitness Enthusiast"
        },
        {
          quote: "I struggled with stress before competitions, but the stress management techniques I learned have transformed my performance. I feel so much more in control now!",
          author: "Sam, Amateur Cyclist"
        },
        {
          quote: "The Goal Setting Mastery program was a game changer for me. I finally have a clear roadmap for my training and personal goals. The support from the team was invaluable!",
          author: "Taylor, College Track Athlete"
        },
        {
          quote: "After participating in the Building Mental Resilience program, I've learned how to bounce back from setbacks much faster. It has made a huge difference in my confidence!",
          author: "Jordan, Professional Swimmer"
        },
        {
          quote: "The positive self-talk strategies have completely shifted my mindset. I no longer doubt myself and approach competitions with confidence!",
          author: "Morgan, High School Soccer Player"
        },
        {
          quote: "The Emotion Regulation Techniques program helped me manage my emotions during high-pressure situations. I feel more balanced and ready to perform at my best!",
          author: "Casey, Marathon Runner"
        },
        {
          quote: "I can't thank the team enough for their support and guidance. The mind-body connection training not only improved my performance but also enhanced my overall well-being!",
          author: "Riley, Fitness Coach"
        },
        {
          quote: "The Recovery and Reflection Techniques I learned have been invaluable. They’ve helped me understand my experiences better and improve my future performances.",
          author: "Jamie, Competitive Gymnast"
        },
        {
          quote: "The concentration training was phenomenal! I’m now able to focus for longer periods and stay in the zone during my games.",
          author: "Avery, Professional Basketball Player"
        }
      ].map((testimonial, index) => (
        <blockquote key={index}>
          <p>{testimonial.quote}</p>
          <cite>- {testimonial.author}</cite>
        </blockquote>
      ))}
    </section>

    {/* Contact Section */}
    <section id="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to learn more about our programs, feel free to reach out!</p>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>
);

export default ExplorePrograms;
