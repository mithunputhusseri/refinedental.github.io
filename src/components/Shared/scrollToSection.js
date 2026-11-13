const HEADER_OFFSET = 118;

export const HOME_SECTION_IDS = [
	'about',
	'dental-services',
	'gallery',
	'testimonials',
	'contact',
	'home',
];

export const isHomePath = (pathname) => pathname === '/' || pathname === '';

export const scrollToSection = (sectionId) => {
	const run = () => {
		const el = document.getElementById(sectionId);
		if (!el) return false;

		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const behavior = prefersReduced ? 'auto' : 'smooth';
		const scrollRoot = document.scrollingElement || document.documentElement;
		const top = el.getBoundingClientRect().top + scrollRoot.scrollTop - HEADER_OFFSET;
		scrollRoot.scrollTo({
			top: Math.max(0, top),
			behavior,
		});

		return true;
	};

	if (run()) return;

	requestAnimationFrame(() => {
		if (!run()) {
			setTimeout(run, 150);
			setTimeout(run, 400);
		}
	});
};

export const goToHomeSection = (navigate, location, sectionId) => {
	if (typeof document !== 'undefined' && document.getElementById(sectionId)) {
		scrollToSection(sectionId);
		return;
	}

	if (!isHomePath(location.pathname)) {
		navigate('/', { state: { scrollTo: sectionId } });
		return;
	}

	scrollToSection(sectionId);
};
