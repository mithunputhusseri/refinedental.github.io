import React from 'react';
import { FaCalendarCheck, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import {
	CLINIC_PHONE_TEL,
	openWhatsApp,
	WHATSAPP_URL,
} from '../../../constants/siteLinks';
import './MobileStickyBar.css';

const MobileStickyBar = () => (
	<nav className="mobile-sticky-bar" aria-label="Quick contact actions">
		<button
			type="button"
			className="mobile-sticky-bar__action mobile-sticky-bar__action--book"
			onClick={openWhatsApp}
		>
			<FaCalendarCheck className="mobile-sticky-bar__icon" aria-hidden="true" />
			<span className="mobile-sticky-bar__label">Book</span>
		</button>
		<a
			className="mobile-sticky-bar__action mobile-sticky-bar__action--call"
			href={CLINIC_PHONE_TEL}
		>
			<FaPhoneAlt className="mobile-sticky-bar__icon" aria-hidden="true" />
			<span className="mobile-sticky-bar__label">Call Now</span>
		</a>
		<a
			className="mobile-sticky-bar__action mobile-sticky-bar__action--whatsapp"
			href={WHATSAPP_URL}
			target="_blank"
			rel="noopener noreferrer"
		>
			<FaWhatsapp className="mobile-sticky-bar__icon" aria-hidden="true" />
			<span className="mobile-sticky-bar__label">WhatsApp</span>
		</a>
	</nav>
);

export default MobileStickyBar;
