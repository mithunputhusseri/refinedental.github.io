import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './InfoPage.css';
import { FaHouseUser, FaCompass } from 'react-icons/fa';
import { scrollToSection } from '../../Shared/scrollToSection';

const WHATSAPP_URL = 'https://wa.me/9113206109';

const InfoPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToDentalServices = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: 'dental-services' } });
            return;
        }
        scrollToSection('dental-services');
    };

    return (
        <section className="quick-actions mt-4 mt-md-0">
            <div className="container">
                <div className="quick-actions-buttons">
                    <a
                        href={WHATSAPP_URL}
                        className="action-pill action-pill--primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaHouseUser className="action-pill-icon" aria-hidden="true" />
                        Book Appointment
                    </a>
                    <a
                        href="#dental-services"
                        className="action-pill action-pill--secondary"
                        onClick={goToDentalServices}
                    >
                        <FaCompass className="action-pill-icon" aria-hidden="true" />
                        Explore Our Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InfoPage;
