import React from 'react'
import SubHeader from '../Shared/SubHeader'
import HomeSectionHeading from '../Shared/HomeSectionHeading';
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import doctorBg from '../../images/img/doctors-bg.jpg';
import { Link } from 'react-router-dom';
import { serviceSections as sections } from './serviceData';
import './Service.css';
const Service = ({ embedded = false }) => {
  const sectionSpacing = embedded
    ? { marginTop: 0, marginBottom: 40 }
    : { marginTop: 200, marginBottom: 100 };

  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    ...(embedded ? { marginTop: 0, marginBottom: 40 } : { marginTop: 200, marginBottom: 100 }),
  }
  return (
    <>
      {!embedded && (
        <>
          <Header />
          <SubHeader title="Service" subtitle="" />
        </>
      )}
      {embedded && <HomeSectionHeading title="Service" />}

      <div className="container" style={sectionSpacing}>
        <div className="row">
          {
            // Array(6).fill(null).map((_item,id) => (
              sections.map((section, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 11}>
                <Link to={`/services/${section.slug}`} className="service-card-link">
                  <div className="card shadow border-0 mb-5 h-100 service-card">
                    <img src={section.img} alt={section.heading} className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                    <div className="p-2">
                      <h4 className="mt-4 mb-2">{section.heading}</h4>
                      {section.points.length > 0 ? (
                        <ul>
                          {section.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                      <p className="form-text mb-0 mt-2">Read the full treatment guide on the detail page.</p>
                    </div>
                  </div>
                </Link>
              </div>
            // ))
          ))}
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the best</h2>
                  <p className='form-text'>.</p>
                   </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {!embedded && <Footer />}
    </>
  )
}

export default Service