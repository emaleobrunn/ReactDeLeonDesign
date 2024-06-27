import React from 'react';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import About from './componentes/About';
import Presentacion from './componentes/Presentacion';
import Projects from './componentes/Projects';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
import './App.css';
import Placa from './componentes/Placa';


const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Placa/>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>

    );
};

export default App;