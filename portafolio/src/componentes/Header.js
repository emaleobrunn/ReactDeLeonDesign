import React from 'react';
/*import './Header.css';*/
import logo from '../assets/logotf.png';
import menu from '../assets/menuicono.png';

const Header = () => {
    return (
        <header>
            {/* <nav>
               <img src={logo} alt="Logo" className="logo" />
                <ul>
                    <li><a href="#hero">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav> */}
            <nav>
              
            <img src={menu} alt="Menu" className="menu" />
                    <div class="navbar-left">
                    <img src={logo} alt="Logo" className="logo" />

                            <ul>
                                <li>
                                    <a href="#hero">Home</a>
                                </li>
                                <li>
                                    <a href="#projects">Work</a>
                                </li>
                                <li>
                                    <a href="#about">About me</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                    </div>

            </nav>
        </header>
    );
};

export default Header;