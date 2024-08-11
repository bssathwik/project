import React from 'react';
import './Footer.css'; // Import any specific CSS for Footer

const Footer = () => {
    return (
        <footer>
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
        </footer>
    );
};

export default Footer;
