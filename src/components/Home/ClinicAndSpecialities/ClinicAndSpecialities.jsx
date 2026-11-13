import React from 'react';
import imgEndodontics from '../../../images/specialities/endodontics-icon.jpg';
import imgLaserDentistry from '../../../images/specialities/laser-dentistry-icon.png';
import imgOralSurgery from '../../../images/specialities/oral-surgery-icon.webp';
import imgPeriodontics from '../../../images/specialities/periodontics-icon.webp';
import imgFullMouth from '../../../images/specialities/full-mouth-rehabilitation-icon.png';
import imgProsthodontics from '../../../images/specialities/prosthodontics-icon.jpg';
import imgDentalImplants from '../../../images/specialities/dental-implants-icon.webp';
import imgPedodontics from '../../../images/specialities/pedodontics-icon.webp';
import imgOrthodontics from '../../../images/specialities/orthodontics-icon.png';
import imgAligners from '../../../images/specialities/aligners-icon.jpg';
import { Link } from 'react-router-dom';
import './index.css';

const dentalServicesRow1 = [
	{ label: 'Dental Implants', img: imgDentalImplants, slug: 'dental-implants', photo: false },
	{ label: 'Aligners', img: imgAligners, slug: 'orthodontics', photo: false },
	{
		label: 'Laser Dentistry',
		img: imgLaserDentistry,
		slug: 'laser-dentistry',
		photo: false,
		iconClass: 'speicality-icon-img--laser-dentistry',
	},
	{ label: 'Orthodontics', img: imgOrthodontics, slug: 'orthodontics', photo: false },
	{ label: 'Periodontics', img: imgPeriodontics, slug: 'periodontics', photo: false },
	{
		label: 'Full Mouth Rehabilitation',
		img: imgFullMouth,
		slug: 'full-mouth-rehabilitation',
		photo: false,
		iconClass: 'speicality-icon-img--full-mouth',
	},
];

const dentalServicesRow2 = [
	{
		label: 'Endodontics',
		img: imgEndodontics,
		slug: 'conservative-endodontics',
		photo: false,
		iconClass: 'speicality-icon-img--endodontics',
	},
	{
		label: 'Pedodontics',
		img: imgPedodontics,
		slug: 'pedodontics',
		photo: false,
		iconClass: 'speicality-icon-img--pedodontics',
	},
	{
		label: 'Oral Surgery',
		img: imgOralSurgery,
		slug: 'oral-surgery',
		photo: false,
		iconClass: 'speicality-icon-img--oral-surgery',
	},
	{ label: 'Prosthodontics', img: imgProsthodontics, slug: 'prosthodontics', photo: false },
];

const SpecialityLink = ({ item }) => (
	<Link to={`/services/${item.slug}`} className="speicality-item text-center speicality-item--link">
		<div className="speicality-img">
			<img
				src={item.img}
				className={`img-fluid speicality-icon-img${item.photo ? ' speicality-icon-img--photo' : ''}${item.iconClass ? ` ${item.iconClass}` : ''}`}
				alt={item.label}
				loading="lazy"
				decoding="async"
			/>
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
						<div className="specialities-slider specialities-slider--row1 d-flex justify-content-center align-items-start gap-5">
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
