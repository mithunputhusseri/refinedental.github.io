import { useEffect } from 'react';
import { GSC_SITE_VERIFICATION } from '../../constants/seoConfig';

const SearchConsoleMeta = () => {
	useEffect(() => {
		if (!GSC_SITE_VERIFICATION) {
			return;
		}

		const metaName = 'google-site-verification';
		let meta = document.querySelector(`meta[name="${metaName}"]`);
		if (!meta) {
			meta = document.createElement('meta');
			meta.setAttribute('name', metaName);
			document.head.appendChild(meta);
		}
		meta.setAttribute('content', GSC_SITE_VERIFICATION);
	}, []);

	return null;
};

export default SearchConsoleMeta;