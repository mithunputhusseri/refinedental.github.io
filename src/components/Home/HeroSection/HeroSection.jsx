import React from 'react';
import './index.css';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container hero-layout">
                <div className="hero-right-copy">
                    <p className="hero-location">
                        Best Dental Clinic in Vidyaranyapura, Bangalore
                    </p>
                    <h1 className="hero-brand-name">
                        ReFine Dental
                        <span className="hero-brand-sub">&amp; Facial Aesthetic Centre</span>
                    </h1>
                    <p className="hero-tagline">
                        REDEFINING DENTAL EXPERIENCE
                        <br />
                        RESHAPING SMILES
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
