import React from 'react';
import { Collapse } from 'antd';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import SubHeader from '../Shared/SubHeader';
import './Faq.css';

const FAQ_ITEMS = [
	{
		key: '1',
		label: 'What are your clinic hours?',
		children:
			'We are open Monday to Saturday for consultations and treatments. For exact timings or holidays, please call us or book via WhatsApp.',
	},
	{
		key: '2',
		label: 'How do I book an appointment?',
		children:
			'Use the Book Appointment button on our website (WhatsApp) or call the clinic directly. Our team will confirm a suitable slot.',
	},
	{
		key: '3',
		label: 'Do you offer emergency dental care?',
		children:
			'Yes. For urgent pain, swelling, or trauma, contact us as soon as possible. We will advise the next available emergency slot.',
	},
	{
		key: '4',
		label: 'What services are available at ReFine Dental?',
		children:
			'We provide dental implants, aligners, orthodontics, laser dentistry, root canal (endodontics), periodontics, oral surgery, prosthodontics, paediatric dentistry, and full mouth rehabilitation.',
	},
	{
		key: '5',
		label: 'Is treatment painful?',
		children:
			'Most procedures are done with local anaesthesia for comfort. We explain each step beforehand and use modern techniques to minimise discomfort.',
	},
	{
		key: '6',
		label: 'How often should I visit for a check-up?',
		children:
			'A routine dental check-up and cleaning every six months is recommended. Your dentist may suggest a different interval based on your oral health.',
	},
	{
		key: '7',
		label: 'Do you treat children?',
		children:
			'Yes. Our pedodontics (children’s dentistry) services include preventive care, fillings, and guidance for healthy oral habits.',
	},
	{
		key: '8',
		label: 'Where is the clinic located?',
		children:
			'ReFine Dental & Facial Aesthetic Centre is in Vidyaranyapura, Bengaluru. See the Contact section on our home page for map and directions.',
	},
];

const Faq = () => {
	return (
		<>
			<Header />
			<SubHeader title="FAQs" subtitle="Common questions about our dental care" />
			<div className="container faq-page">
				<p className="faq-page-intro text-center form-text">
					Find quick answers below. For anything not listed, reach us through Contact or Book Appointment.
				</p>
				<Collapse items={FAQ_ITEMS} bordered={false} className="faq-accordion" expandIconPosition="end" />
			</div>
			<Footer />
		</>
	);
};

export default Faq;
