import { CLINIC_NAME, SITE_URL } from './businessInfo';

export const websiteJsonLd = () => ({
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': `${SITE_URL}#website`,
	url: SITE_URL,
	name: CLINIC_NAME,
	publisher: { '@id': `${SITE_URL}#dentist` },
	potentialAction: {
		'@type': 'SearchAction',
		target: {
			'@type': 'EntryPoint',
			urlTemplate: `${SITE_URL.replace(/\/$/, '')}/#/services/{search_term_string}`,
		},
		'query-input': 'required name=search_term_string',
	},
});