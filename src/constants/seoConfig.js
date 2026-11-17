import { SITE_URL } from './businessInfo';

/** Public service detail slugs (matches `serviceDetailContents` keys). */
export const PUBLIC_SERVICE_SLUGS = [
	'dental-implants',
	'conservative-endodontics',
	'orthodontics',
	'periodontics',
	'prosthodontics',
	'pedodontics',
	'oral-surgery',
	'laser-dentistry',
	'full-mouth-rehabilitation',
];

/** Marketing pages to list in sitemap (HashRouter paths → canonical `#/path`). */
export const SITEMAP_PATHS = [
	'/',
	'/faq',
	'/blog',
	...PUBLIC_SERVICE_SLUGS.map((slug) => `/services/${slug}`),
];

export const toCanonicalUrl = (pathname = '/') => {
	const base = SITE_URL.replace(/\/$/, '');
	if (pathname === '/' || pathname === '') {
		return `${base}/`;
	}
	const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return `${base}/#${path}`;
};

export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || '';
export const GSC_SITE_VERIFICATION = process.env.REACT_APP_GSC_SITE_VERIFICATION || '';