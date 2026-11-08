import React from 'react';

const HomeSectionHeading = ({ title, subtitle }) => (
    <div className="mb-5 section-title text-center">
        <h2 className="text-uppercase" style={{ color: '#223a66' }}>{title}</h2>
        {subtitle ? <p className="m-0 form-text">{subtitle}</p> : null}
    </div>
);

export default HomeSectionHeading;
