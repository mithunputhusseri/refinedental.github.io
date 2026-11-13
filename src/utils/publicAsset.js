/**
 * Builds a URL for files in /public (e.g. newgallery). Respects CRA PUBLIC_URL
 * so assets work on localhost (subpath) and GitHub Pages.
 */
export const publicAsset = (relativePath) => {
	const clean = relativePath.replace(/^\//, '');
	const encodedPath = clean
		.split('/')
		.map((segment) => encodeURIComponent(segment))
		.join('/');

	const raw = process.env.PUBLIC_URL || '';
	const base =
		raw === '.' || raw === '/' || raw === ''
			? ''
			: raw.replace(/\/$/, '');

	if (!base) {
		return `/${encodedPath}`;
	}

	return `${base}/${encodedPath}`;
};
