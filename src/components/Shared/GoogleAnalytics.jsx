import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_MEASUREMENT_ID } from '../../constants/seoConfig';

const GoogleAnalytics = () => {
	const location = useLocation();

	useEffect(() => {
		if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
			return;
		}

		if (window.__gaInitialized) {
			return;
		}
		window.__gaInitialized = true;

		const gtagScript = document.createElement('script');
		gtagScript.async = true;
		gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
		document.head.appendChild(gtagScript);

		window.dataLayer = window.dataLayer || [];
		// eslint-disable-next-line no-inner-declarations
		function gtag() {
			// eslint-disable-next-line prefer-rest-params
			window.dataLayer.push(arguments);
		}
		window.gtag = gtag;
		gtag('js', new Date());
		gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
	}, []);

	useEffect(() => {
		if (!GA_MEASUREMENT_ID || !window.gtag) {
			return;
		}
		const pagePath = `${location.pathname}${location.search}${location.hash}`;
		window.gtag('config', GA_MEASUREMENT_ID, {
			page_path: pagePath,
		});
	}, [location.pathname, location.search, location.hash]);

	if (!GA_MEASUREMENT_ID) {
		return null;
	}

	return null;
};

export default GoogleAnalytics;