import React from 'react';
import { Link } from 'react-router-dom';
import { getServiceDetailContent } from './serviceDetailContents';
import '../ServiceDetail.css';
import './ServiceDetailBody.css';

const WHATSAPP_URL = 'https://wa.me/9113206109';

const ServiceDetailBody = ({ slug }) => {
    const content = getServiceDetailContent(slug);
    if (!content) {
        return null;
    }

    return (
        <section className="service-detail-body-section">
            <div className="container service-detail-page-inner">
                <Link to="/" state={{ scrollTo: 'dental-services' }} className="service-detail-back">
                    ← Back to Dental Services
                </Link>

                <div className="service-detail-body">
                    {content.sections.map((section, index) => (
                        <div key={`${slug}-section-${index}`}>
                            <h2 className="service-detail-body-heading">{section.title}</h2>
                            {section.intro && <p className="form-text">{section.intro}</p>}
                            {section.items && section.listType === 'ol' && (
                                <ol>
                                    {section.items.map((item, i) => (
                                        <li key={i}>{renderListItem(item)}</li>
                                    ))}
                                </ol>
                            )}
                            {section.items && section.listType !== 'ol' && (
                                <ul className={section.faq ? 'service-detail-faq' : undefined}>
                                    {section.items.map((item, i) => (
                                        <li key={i}>{renderListItem(item)}</li>
                                    ))}
                                </ul>
                            )}
                            {section.outro && <p className="form-text">{section.outro}</p>}
                        </div>
                    ))}

                    {content.cta && <p className="service-detail-cta">{content.cta}</p>}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="service-detail-book-btn"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </section>
    );
};

const renderListItem = (item) => {
    if (typeof item === 'string') {
        return item;
    }
    return (
        <>
            <strong>{item.label}</strong>
            {item.text}
        </>
    );
};

export default ServiceDetailBody;
