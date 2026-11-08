import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { getServiceBySlug } from './serviceData';
import { getServiceLead } from './content/serviceDetailContents';
import ServiceHeroBanner from './ServiceHeroBanner';
import ServiceDetailBody from './content/ServiceDetailBody';
import './ServiceDetail.css';
import './ServiceHeroBanner.css';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    if (!service) {
        return <Navigate to="/" state={{ scrollTo: 'dental-services' }} replace />;
    }

    const lead = getServiceLead(slug) || service.lead;

    return (
        <>
            <Header />
            <ServiceHeroBanner image={service.img} title={service.heading} lead={lead} />
            <ServiceDetailBody slug={slug} />
            <Footer />
        </>
    );
};

export default ServiceDetail;
