import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './InfoPage.css';
import { FaHouseUser, FaCompass } from 'react-icons/fa';
import { goToHomeSection } from '../../Shared/scrollToSection';
import { openWhatsApp } from '../../../constants/siteLinks';

const InfoPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToDentalServices = () => {
        goToHomeSection(navigate, location, 'dental-services');
    };

    return (
        <section className="quick-actions mt-4 mt-md-0">
            <div className="container">
                <div className="quick-actions-buttons">
                    <button
                        type="button"
                        className="action-pill action-pill--primary"
                        onClick={openWhatsApp}
                    >
                        <FaHouseUser className="action-pill-icon" aria-hidden="true" />
                        Book Appointment
                    </button>
                    <button
                        type="button"
                        className="action-pill action-pill--secondary"
                        onClick={goToDentalServices}
                    >
                        <FaCompass className="action-pill-icon" aria-hidden="true" />
                        Explore Our Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InfoPage;
