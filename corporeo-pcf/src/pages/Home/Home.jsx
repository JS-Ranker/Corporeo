import React, { useEffect } from 'react';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import './Home.css';

// Import images
import logo from '../../assets/img/logo/logo.png';
import imgCompleto from '../../assets/img/prototipo/factor-completo.png';
import imgEvento from '../../assets/img/prototipo/factor-en-evento.png';
import imgTienda from '../../assets/img/prototipo/factor-tienda.png';
import imgPerfil from '../../assets/img/prototipo/factor-perfil.png';

const Home = () => {
    useEffect(() => {
        // Simple parallax effect for hero
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const heroContent = document.querySelector('.hero-content');
            const heroBg = document.querySelector('.hero-bg');

            if (heroContent && heroBg) {
                heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
                heroBg.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const galleryImages = [
        { src: imgCompleto, alt: 'Prototipo Completo', title: 'Diseño Integral' },
        { src: imgTienda, alt: 'En Tienda', title: 'Presencia en Punto de Venta' },
        { src: imgEvento, alt: 'En Evento', title: 'Impacto en Eventos' },
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="logo-container animate-fadeInDown">
                        <img src={logo} alt="PC Factory Logo" className="hero-logo" />
                    </div>
                    <h1 className="hero-title animate-fadeInUp delay-200">
                        EL FUTURO DE LA <br />
                        <span className="gradient-text">EXPERIENCIA DE MARCA</span>
                    </h1>
                    <p className="hero-subtitle animate-fadeInUp delay-400">
                        Presentando a <span className="text-primary">FACTOR</span>: El Corpóreo Tecnológico de PC Factory
                    </p>
                    <div className="scroll-indicator animate-float delay-600">
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <span>Descubre Más</span>
                    </div>
                </div>
            </section>

            {/* Prototype Showcase Section */}
            <section className="section showcase-section">
                <div className="container">
                    <div className="section-header text-center animate-fadeInUp">
                        <h2 className="section-title">PROTOTIPO <span className="text-primary">FACTOR</span></h2>
                        <p className="section-description">
                            Una fusión perfecta entre identidad de marca y estética futurista.
                        </p>
                    </div>

                    <ImageGallery images={galleryImages} />
                </div>
            </section>

            {/* Importance Section */}
            <section className="section importance-section">
                <div className="container">
                    <div className="section-header text-center animate-fadeInUp">
                        <h2 className="section-title">¿POR QUÉ ES <span className="gradient-text">IMPORTANTE?</span></h2>
                        <p className="section-description">
                            <span className="text-primary">Factor</span> es más que una mascota, es un ícono de innovación tecnológica.
                        </p>
                    </div>

                    <div className="features-grid">
                        <FeatureCard
                            delay={100}
                            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                            title="Identidad Visual"
                            description="Refuerza la posición de PC Factory como líder indiscutible en tecnología y vanguardia."
                        />
                        <FeatureCard
                            delay={200}
                            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                            title="Atracción de Clientes"
                            description="Un elemento magnético que captura la atención inmediata en tiendas y eventos masivos."
                        />
                        <FeatureCard
                            delay={300}
                            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>}
                            title="Diferenciación"
                            description="Destaca frente a la competencia con una propuesta visual única y memorable."
                        />
                    </div>
                </div>
            </section>

            {/* Competitive Advantages Section */}
            <section className="section advantages-section">
                <div className="bg-glow"></div>
                <div className="container">
                    <div className="section-header text-center animate-fadeInUp">
                        <h2 className="section-title">VENTAJAS <span className="text-primary">COMPETITIVAS</span></h2>
                    </div>

                    <div className="advantages-grid">
                        <div className="advantage-item glass-card animate-slideInLeft delay-100">
                            <div className="advantage-number">01</div>
                            <div className="advantage-content">
                                <h3>Diseño Tech-Forward</h3>
                                <p>Estética inspirada en hardware de alto rendimiento y cultura gamer.</p>
                            </div>
                        </div>
                        <div className="advantage-item glass-card animate-slideInRight delay-200">
                            <div className="advantage-number">02</div>
                            <div className="advantage-content">
                                <h3>Versatilidad</h3>
                                <p>Adaptable a diferentes contextos: lanzamientos, ferias, y activaciones en tienda.</p>
                            </div>
                        </div>
                        <div className="advantage-item glass-card animate-slideInLeft delay-300">
                            <div className="advantage-number">03</div>
                            <div className="advantage-content">
                                <h3>Conexión Emocional</h3>
                                <p>Humaniza la marca manteniendo su esencia tecnológica y profesional.</p>
                            </div>
                        </div>
                        <div className="advantage-item glass-card animate-slideInRight delay-400">
                            <div className="advantage-number">04</div>
                            <div className="advantage-content">
                                <h3>Viralidad</h3>
                                <p>Diseñado específicamente para ser "instagrameable" y generar contenido orgánico.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Section */}
            <section className="section engagement-section">
                <div className="container">
                    <div className="engagement-content glass-card animate-scaleIn">
                        <div className="engagement-text">
                            <h2 className="section-title">ENGAGEMENT CON EL <span className="gradient-text">PÚBLICO</span></h2>
                            <p className="engagement-description">
                                <span className="text-primary">Factor</span> no es solo una imagen, es una experiencia interactiva. Diseñado para interactuar,
                                jugar y crear momentos memorables con la comunidad gamer y tech.
                            </p>
                            <ul className="engagement-list">
                                <li>
                                    <span className="check-icon">✓</span>
                                    Fotos y Selfies Virales
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    Interacción en Torneos
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    Creación de Contenido RRSS
                                </li>
                            </ul>
                            <button className="btn btn-primary mt-4">Ver Propuesta Completa</button>
                        </div>
                        <div className="engagement-visual">
                            <div className="circle-glow"></div>
                            <img src={imgPerfil} alt="Perfil Corpóreo" className="engagement-profile" />
                            <div className="tech-grid"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container text-center">
                    <img src={logo} alt="PC Factory" className="footer-logo" />
                    <p className="footer-text">Innovación y Tecnología al Siguiente Nivel</p>
                    <div className="footer-line"></div>
                    <p className="copyright">© 2024 Propuesta de Diseño. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
