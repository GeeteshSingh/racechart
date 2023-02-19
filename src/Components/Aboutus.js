import React from 'react';
import '../Components/footerStyle.css'; //import CSS file

function Footer() {
    return (
        <footer>
        <div id="contact" className="contact">
            <div className="header">
                <h2>Let's work together...</h2>
                <p>Reach out by any following means</p>
            </div>
            <a href="https://www.facebook.com/geeteshsin/" target="_blank" className="contact-details">Facebook</a>
            <a id='profile-link' href="https://github.com/GeeteshSingh" target="_blank"
               className="contact-details">GitHub</a>
            <a href="https://www.linkedin.com/in/Geeteshsingh" target="_blank" className="contact-details">LinkedIn</a>
            <a href="mailto:singh.geetesh98@gmail.com" className="contact-details" target="_blank">Send
                a mail</a>
        </div>

        <p>&copy; Created by <a href="https://www.facebook.com/geeteshsin/" target="_blank">GeeteshSingh</a></p>
    </footer>
    );
}

export default Footer;
