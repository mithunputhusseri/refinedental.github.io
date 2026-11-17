import { WHATSAPP_URL } from './siteLinks';

/** Canonical site URL (package.json homepage). */
export const SITE_URL = 'https://refinedental.co/';

export const CLINIC_NAME = 'ReFine Dental & Facial Aesthetic Centre';

export const CLINIC_EMAIL = 'refine.den.2024@gmail.com';

export const CLINIC_ADDRESS = {
	streetAddress:
		'Sy No 25/2, Saud Complex, 1st Floor, M, Sambhram College Road, Best County 3',
	addressLocality: 'Vidyaranyapura',
	addressRegion: 'Karnataka',
	postalCode: '560097',
	addressCountry: 'IN',
};

/** Clinic coordinates (verified). */
export const CLINIC_GEO = {
	latitude: 13.089702,
	longitude: 77.542739,
};

/** FAQ: open Monday–Saturday; call/WhatsApp for exact slot times. */
export const CLINIC_OPENING_HOURS = 'Mo-Sa';

export const CLINIC_SERVICES = [
	'Dental Implants',
	'Aligners',
	'Orthodontics',
	'Laser Dentistry',
	'Endodontics',
	'Periodontics',
	'Oral Surgery',
	'Prosthodontics',
	'Pedodontics',
	'Full Mouth Rehabilitation',
];

export const CLINIC_SAME_AS = [
	'https://www.facebook.com/profile.php?id=61561602174051',
	'https://www.instagram.com/refine_dental_facial_aesthetic',
	WHATSAPP_URL,
];

export const localBusinessJsonLd = () => ({
	'@context': 'https://schema.org',
	'@type': ['Dentist', 'MedicalBusiness'],
	'@id': `${SITE_URL}#dentist`,
	name: CLINIC_NAME,
	url: SITE_URL,
	telephone: '+91-9113206109',
	email: CLINIC_EMAIL,
	image: `${SITE_URL}favicon.ico`,
	priceRange: '$$',
	medicalSpecialty: 'Dentistry',
	address: {
		'@type': 'PostalAddress',
		...CLINIC_ADDRESS,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: CLINIC_GEO.latitude,
		longitude: CLINIC_GEO.longitude,
	},
	openingHours: CLINIC_OPENING_HOURS,
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Dental Services',
		itemListElement: CLINIC_SERVICES.map((name) => ({
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name,
				provider: { '@id': `${SITE_URL}#dentist` },
			},
		})),
	},
	areaServed: {
		'@type': 'City',
		name: 'Bengaluru',
	},
	sameAs: CLINIC_SAME_AS,
});
