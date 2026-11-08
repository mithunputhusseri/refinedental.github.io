import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import ClinicAndSpecialities from '../ClinicAndSpecialities/ClinicAndSpecialities';
import HeroSection from '../HeroSection/HeroSection';
import InfoPage from '../InfoPage/InfoPage';
import Header from '../../Shared/Header/Header';
import About from '../../About/About';
import TestimonialsSection from '../../About/TestimonialsSection';
import Gallery from '../../Gallery/Gallery';
import Contact from '../../Contact/Contact';
import { scrollToSection } from '../../Shared/scrollToSection';
import './home-sections.css';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.state?.scrollTo;
        if (!sectionId) return;

        const timer = setTimeout(() => {
            scrollToSection(sectionId);
        }, 100);

        return () => clearTimeout(timer);
    }, [location.state?.scrollTo]);

    return (
        <>
            <Header />
            <div id="home">
                <HeroSection />
                <InfoPage />
                <div id="about" className="home-section">
                    <About embedded />
                </div>
                <ClinicAndSpecialities />
            </div>
            <div id="gallery" className="home-section">
                <Gallery embedded />
            </div>
            <div id="testimonials" className="home-section">
                <TestimonialsSection embedded />
            </div>
            <div className="home-section">
                <Contact embedded />
            </div>
            <Footer />
        </>
    );
};

export default Home;
