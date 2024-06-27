import React from 'react';
/*import './Footer.css';*/

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;