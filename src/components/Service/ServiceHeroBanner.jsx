import React from 'react';
import './ServiceHeroBanner.css';

const ServiceHeroBanner = ({ image, title, lead }) => {
    if (!image) {
        return null;
    }

    return (
        <section className="service-hero-banner">
            <div className="container service-detail-page-inner">
                <div className="service-hero">
                    <div className="service-hero-frame">
                        <img src={image} alt={title} className="service-hero-img" />
                        <div className="service-hero-title">
                            <h1>{title}</h1>
                        </div>
                        {lead ? <p className="service-hero-lead">{lead}</p> : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHeroBanner;
