import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CLINIC_NAME, SITE_URL } from '../../constants/businessInfo';
import { toCanonicalUrl } from '../../constants/seoConfig';

const DEFAULT_DESCRIPTION =
	'ReFine Dental & Facial Aesthetic Centre — dental clinic in Vidyaranyapura, Bengaluru. Implants, aligners, laser dentistry, and more.';

const ROUTE_META = {
	'/faq': {
		title: `FAQs | ${CLINIC_NAME}`,
		description: DEFAULT_DESCRIPTION,
	},
	'/blog': {
		title: `Blog | ${CLINIC_NAME}`,
		description: DEFAULT_DESCRIPTION,
	},
};

const getServiceTitle = (pathname) => {
	const match = pathname.match(/^\/services\/([^/]+)$/);
	if (!match) {
		return null;
	}
	const slug = match[1];
	const label = slug
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
	return `${label} | ${CLINIC_NAME}`;
};

const SeoHead = () => {
	const location = useLocation();

	useEffect(() => {
		const pathname = location.pathname || '/';
		const routeMeta = ROUTE_META[pathname];
		const serviceTitle = getServiceTitle(pathname);

		document.title =
			serviceTitle ||
			routeMeta?.title ||
			`${CLINIC_NAME} | Best Dental Clinic in Vidyaranyapura, Bangalore`;

		const description = routeMeta?.description || DEFAULT_DESCRIPTION;
		let metaDesc = document.querySelector('meta[name="description"]');
		if (!metaDesc) {
			metaDesc = document.createElement('meta');
			metaDesc.setAttribute('name', 'description');
			document.head.appendChild(metaDesc);
		}
		metaDesc.setAttribute('content', description);

		const canonicalUrl = toCanonicalUrl(pathname);
		let canonical = document.querySelector('link[rel="canonical"]');
		if (!canonical) {
			canonical = document.createElement('link');
			canonical.setAttribute('rel', 'canonical');
			document.head.appendChild(canonical);
		}
		canonical.setAttribute('href', canonicalUrl);

		let ogUrl = document.querySelector('meta[property="og:url"]');
		if (!ogUrl) {
			ogUrl = document.createElement('meta');
			ogUrl.setAttribute('property', 'og:url');
			document.head.appendChild(ogUrl);
		}
		ogUrl.setAttribute('content', canonicalUrl);

		let ogTitle = document.querySelector('meta[property="og:title"]');
		if (!ogTitle) {
			ogTitle = document.createElement('meta');
			ogTitle.setAttribute('property', 'og:title');
			document.head.appendChild(ogTitle);
		}
		ogTitle.setAttribute('content', document.title);

		let ogDesc = document.querySelector('meta[property="og:description"]');
		if (!ogDesc) {
			ogDesc = document.createElement('meta');
			ogDesc.setAttribute('property', 'og:description');
			document.head.appendChild(ogDesc);
		}
		ogDesc.setAttribute('content', description);

		let ogType = document.querySelector('meta[property="og:type"]');
		if (!ogType) {
			ogType = document.createElement('meta');
			ogType.setAttribute('property', 'og:type');
			document.head.appendChild(ogType);
		}
		ogType.setAttribute('content', 'website');

		const base = SITE_URL.replace(/\/$/, '');
		let ogImage = document.querySelector('meta[property="og:image"]');
		if (!ogImage) {
			ogImage = document.createElement('meta');
			ogImage.setAttribute('property', 'og:image');
			document.head.appendChild(ogImage);
		}
		ogImage.setAttribute('content', `${base}/favicon.ico`);
	}, [location.pathname]);

	return null;
};

export default SeoHead;