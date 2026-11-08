import React from 'react'
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '../../images/doc/doctor 5.jpg'
import img from '../../images/logo1.png'
import SubHeader from '../Shared/SubHeader';
import HomeSectionHeading from '../Shared/HomeSectionHeading';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { Empty, message } from 'antd';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { useGetDoctorsQuery } from '../../redux/api/doctorApi';
import doctorimage from '../../images/doc/doc1.jpg';
import amalimage from '../../images/doc/tooth.jpg';
import amalimage2 from '../../images/doc/tooth.jpg';
import nikhilimage2 from '../../images/doc/doc1.jpg';
import bgImage1 from '../../images/img/banner.jpg';
import backgroundImage from '../../images/doc/bgd.png';

const sectionStyle1 = {
    background: `url(${bgImage1}) no-repeat 50% 50%`,
    backgroundSize: 'cover',
    position: 'relative',
    marginTop: '88px',
    padding: '120px 0px 70px 0px',
};
const overlayStyle1 = {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    right: '0',
    width: '100%',
    height: '100%',
    opacity: '0.9',
    background: '#223a66',
};
const About = ({ embedded = false }) => {
    
    const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 4 });
    const { data: doctorData, isLoading: DoctorIsLoading, isError: doctorIsError } = useGetDoctorsQuery({ limit: 4 });

    const blogData = data?.blogs;
    const doctors = doctorData?.doctors;

    let doctorContent = (
        <div className="doctor-container about-team d-flex justify-content-center flex-wrap">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card shadow border-0 mb-5 mb-lg-0 about-team-card about-team-card--first">
                    <div className="about-team-photo">
                        <img src={amalimage2} className="img-fluid w-100 about-team-img" alt="Dr. Amal Hari" />
                    </div>
                    <div className="p-2">
                        <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}>
                            Dr. Amal Hari&nbsp;
                            <span className="mds-text"> MDS</span>
                        </h4>
                        <p>Periodontist & Implantologist</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card shadow border-0 mb-5 mb-lg-0 about-team-card about-team-card--second">
                    <div className="about-team-photo">
                        <img src={nikhilimage2} className="img-fluid w-100 about-team-img" alt="Dr. Nikhil Johnson" />
                    </div>
                    <div className="p-2">
                        <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}>
                            Dr. Nikhil Johnson&nbsp;
                            <span className="mds-text"> MDS</span>
                        </h4>
                        <p>Orthodontist</p>
                    </div>
                </div>
            </div>
        </div>
    );
    let blogContent = null;

    if (!isLoading && !isError && blogData?.length === 0) blogContent = <Empty />
    if (!isLoading && !isError && blogData?.length > 0) blogContent =
        <>
            {
                blogData && blogData?.map((item, id) => (
                    <div className="col-lg-3 col-md-6" key={id + item.id}>
                        <div className="card shadow border-0 mb-5 mb-lg-0">
                            <img src={item?.img} alt="blog Image" width={300} height={200} className="w-100  rounded-top image-hover" style={{ objectFit: 'contain' }} />

                            <div className='p-2'>
                                <Link to={`/blog/${item?.id}`}>
                                    <h6 className="text-start mb-1 text-capitalize" style={{ color: '#223a66' }}>{truncate(item?.title, 40)}</h6>
                                </Link>
                                <div className="px-2">
                                    <p className="form-text text-start text-capitalize">{truncate(item?.description, 80)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    const pageMargins = embedded
        ? { marginBottom: 12, marginTop: 0 }
        : { marginBottom: 100, marginTop: 100 };

    const pageContent = (
        <>
            {!embedded && (
                <>
                    <Header />
                    <SubHeader title="about us" />
                </>
            )}
            {embedded && <HomeSectionHeading title="About us" />}
            <div className="container about-intro">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <p className="about-intro-text text-center form-text mb-0">
                            Considering Refine Dental for your dental needs can ensure a positive experience. We are the best dental clinic in Vidyaranyapura (Bengaluru) who deliver evidence based dental treatments to help you look, smile and feel great. Our highly qualified and experienced dentists prioritize top-notch care, offering a comprehensive range of services to address all your dental concerns. From routine checkups and cleanings to advanced procedures, our focus is on providing the best possible solutions to keep your smile healthy and bright.
                        </p>
                    </div>
                </div>
            </div>
<div className="container" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      ...pageMargins
    }}>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>Meet Our Team</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {doctorContent}
                </div>
            </div>
            {!embedded && <Footer />}
        </>
    );

    return pageContent;
}

export default About