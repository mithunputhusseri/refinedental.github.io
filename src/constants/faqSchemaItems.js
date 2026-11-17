/** FAQ copy for FAQPage JSON-LD (keep aligned with `Faq.jsx` content). */
export const FAQ_SCHEMA_ITEMS = [
	{
		question: 'What are your clinic hours?',
		answer:
			'We are open Monday to Saturday for consultations and treatments. For exact timings or holidays, please call us or book via WhatsApp.',
	},
	{
		question: 'How do I book an appointment?',
		answer:
			'Use the Book Appointment button on our website (WhatsApp) or call the clinic directly. Our team will confirm a suitable slot.',
	},
	{
		question: 'Do you offer emergency dental care?',
		answer:
			'Yes. For urgent pain, swelling, or trauma, contact us as soon as possible. We will advise the next available emergency slot.',
	},
	{
		question: 'What services are available at ReFine Dental?',
		answer:
			'We provide dental implants, aligners, orthodontics, laser dentistry, root canal (endodontics), periodontics, oral surgery, prosthodontics, paediatric dentistry, and full mouth rehabilitation.',
	},
	{
		question: 'Is treatment painful?',
		answer:
			'Most procedures are done with local anaesthesia for comfort. We explain each step beforehand and use modern techniques to minimise discomfort.',
	},
	{
		question: 'How often should I visit for a check-up?',
		answer:
			'A routine dental check-up and cleaning every six months is recommended. Your dentist may suggest a different interval based on your oral health.',
	},
	{
		question: 'Do you treat children?',
		answer:
			'Yes. Our pedodontics (children’s dentistry) services include preventive care, fillings, and guidance for healthy oral habits.',
	},
	{
		question: 'Where is ReFine Dental located?',
		answer:
			'ReFine Dental & Facial Aesthetic Centre is in Vidyaranyapura, Bengaluru. See the Contact section on our home page for map and directions.',
	},
];

export const faqPageJsonLd = () => ({
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: FAQ_SCHEMA_ITEMS.map(({ question, answer }) => ({
		'@type': 'Question',
		name: question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: answer,
		},
	})),
});