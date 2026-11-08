import React from 'react';
import './index.css';
import HomeSectionHeading from '../Shared/HomeSectionHeading';
import SubHeader from '../Shared/SubHeader';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const TestimonialsSection = ({ embedded = false }) => {
    const sectionSpacing = embedded
        ? { marginBottom: 0, marginTop: 0 }
        : { marginBottom: 100, marginTop: 100 };

    return (
        <>
            {!embedded && (
                <>
                    <Header />
                    <SubHeader title="Testimonials" />
                </>
            )}
            {embedded && <HomeSectionHeading title="Testimonials" />}
            <div className="container say-about" style={sectionSpacing}>
                {!embedded && (
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="mb-4 section-title text-center">
                                <h2 className="text-uppercase">Testimonials</h2>
                            </div>
                        </div>
                    </div>
                )}

                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className="my-0">Feels relaxing!</h4>
                            <span>Shalakha Suraj</span>
                        </div>
                        <p className="form-text">
                            The clinic is very beautifully designed and feels relaxing.
                            The doctor very patiently listened to my issue and treated me well. Throughout the procedure he ensured my comfort.
                            Highly recommended !!
                        </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className="my-0">Modern and impeccably clean!</h4>
                            <span>Sanskriti Parihar</span>
                        </div>
                        <p className="form-text">
                            I highly recommend this Clinic for anyone seeking top-notch dental care. From the moment I walked in, I was greeted warmly. The clinic itself is modern and impeccably clean, which immediately put me at ease.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className="my-0">Highly professional!</h4>
                            <span>Sujitha Golla</span>
                        </div>
                        <p className="form-text">
                            Refine Dental Clinic has highly professional and talented doctors.I got my root canal treatment done here. His expertise and the clinic&apos;s welcoming atmosphere made the procedure smooth and painless. Highly recommend for quality dental care.
                        </p>
                    </div>
                </div>
            </div>
            {!embedded && <Footer />}
        </>
    );
};

export default TestimonialsSection;
