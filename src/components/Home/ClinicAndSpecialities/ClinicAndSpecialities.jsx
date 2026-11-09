import React from 'react';
import img1 from '../../../images/specialities/root canal.png';
import img3 from '../../../images/specialities/Laser dentistry.png';
import img4 from '../../../images/specialities/OS.png';
import img5 from '../../../images/specialities/Periodontics_1.jpg';
import img6 from '../../../images/specialities/Full Mouth Rehabilitation.png';
import img7 from '../../../images/specialities/prosthodontics.jpg';
import img8 from '../../../images/specialities/Dental Implants.png';
import img9 from '../../../images/specialities/Pedodontics.png';
import img10 from '../../../images/specialities/orthodontic_3954427.png';
import img12 from '../../../images/specialities/aligners.png';
import { FaCheckDouble } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './index.css';

const dentalServicesRow1 = [
	{ label: 'Dental Implants', img: img8, slug: 'dental-implants', photo: false },
	{ label: 'Aligners', img: img12, slug: 'orthodontics', photo: false },
	{ label: 'Laser Dentistry', img: img3, slug: 'laser-dentistry', photo: false },
	{ label: 'Orthodontics', img: img10, slug: 'orthodontics', photo: false },
	{ label: 'Periodontics', img: img5, slug: 'periodontics', photo: true },
	{ label: 'Full Mouth Rehabilitation', img: img6, slug: 'full-mouth-rehabilitation', photo: false },
];

const dentalServicesRow2 = [
	{ label: 'Endodontics', img: img1, slug: 'conservative-endodontics', photo: false },
	{ label: 'Pedodontics', img: img9, slug: 'pedodontics', photo: false },
	{ label: 'Oral Surgery', img: img4, slug: 'oral-surgery', photo: false },
	{ label: 'Prosthodontics', img: img7, slug: 'prosthodontics', photo: true },
];

const SpecialityLink = ({ item }) => (
	<Link to={`/services/${item.slug}`} className="speicality-item text-center speicality-item--link">
		<div className="speicality-img">
			<img
				src={item.img}
				className={`img-fluid speicality-icon-img${item.photo ? ' speicality-icon-img--photo' : ''}`}
				alt={item.label}
				loading="lazy"
				decoding="async"
			/>
			<span className="speicality-check">
				<FaCheckDouble />
			</span>
		</div>
		{item.label && <p>{item.label}</p>}
	</Link>
);

const ClinicAndSpecialities = () => {
	return (
		<section className="section section-specialities position-relative">
			<div className="container-fluid">
				<div className="mb-0 section-title text-center">
					<p className="m-0"><h2>DENTAL SERVICES</h2></p>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex justify-content-center align-items-center gap-5">
							{dentalServicesRow1.map((item) => (
								<SpecialityLink key={item.label} item={item} />
							))}
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex justify-content-center align-items-center gap-5">
							{dentalServicesRow2.map((item) => (
								<SpecialityLink key={item.label} item={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClinicAndSpecialities;
