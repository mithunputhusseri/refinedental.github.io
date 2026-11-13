
// import img2 from '../../../public/newgallery/IMG_0784 (1).png';
// import img3 from '../../../images/doc/DSC_0093.png';
// import img4 from '../../../images/doc/DSC_0117.png';
// import img5 from '../../../images/doc/DSC_0115.png';
// import img6 from '../../../images/doc/IMG_0778 (1).png';
// import img7 from '../../../images/doc/DSC_0121.png';
// import img8 from '../../../images/doc/DSC_0109.png';
// import img9 from '../../../images/doc/IMG_0775 (1).png';
// import img10 from '../../../images/doc/Watermark (1).png';
// import img11 from '../../../images/doc/Watermark (2).png';
// import img12 from '../../../images/doc/teet.png';
// import img13 from '../../../images/doc/Laser crown exposure.png';

// import './index.css';
// import { Image } from 'antd';
// import { Link } from 'react-router-dom'
import React from 'react';
import './index.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '../../images/doc/doctor 5.jpg'
import img from '../../images/logo1.png'
import SubHeader from '../Shared/SubHeader';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { Empty, message } from 'antd';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { useGetDoctorsQuery } from '../../redux/api/doctorApi';
import bgImage1 from '../../images/img/banner.jpg';
import backgroundImage from '../../images/doc/bgd.png';
import { Image } from 'antd';
import HomeSectionHeading from '../Shared/HomeSectionHeading';
import { publicAsset } from '../../utils/publicAsset';

const GALLERY_FILES = [
    'IMG_0784 (1).png',
    'DSC_0093.png',
    'DSC_0117.png',
    'DSC_0115.png',
    'IMG_0778 (1).png',
    'DSC_0121.png',
    'DSC_0109.png',
    'IMG_0775 (1).png',
    'Watermark (1).png',
    'Watermark (2).png',
    'teet.png',
    'Laser crown exposure.png',
];

const Gallery = ({ embedded = false }) => {
    const imageArray = GALLERY_FILES.map((file) => publicAsset(`newgallery/${file}`));
    
    return (
        <>
            {!embedded && (
                <>
                    <Header />
                    <SubHeader title="Gallery" />
                </>
            )}
            {embedded && <HomeSectionHeading title="Gallery" />}

        {/* // <section className="gallery container">
        //     <div className="text-center mb-5">
        //         <div className="section-title mb-3">
        //             <h2>Gallery</h2>
        //             <p></p>
        //         </div>
        //     </div> */}

            <div className="container-fluid">
                <div className="row g-0">
                    <Image.PreviewGroup>
                        {
                            imageArray.map((item, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-12" key={index + 55}>
                                    <div className="gallery-item">
                                        <div className="galelry-lightbox d-flex justify-content-center align-items-center">
                                            <Image src={item} alt="" className="w-100" style={{objectFit:'cover',maxHeight:'280px', minHeight:'280px'}}/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Image.PreviewGroup>
                </div>

            </div>
        {/* // </section> */}
        </>
    )
}

export default Gallery