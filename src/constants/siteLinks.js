export const WHATSAPP_URL = 'https://wa.me/9113206109';

/** Opens WhatsApp reliably (works on GitHub Pages and in mobile browsers). */
export const openWhatsApp = () => {
	const opened = window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
	if (!opened) {
		window.location.href = WHATSAPP_URL;
	}
};
