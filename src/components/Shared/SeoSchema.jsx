import React from 'react';
import { faqPageJsonLd } from '../../constants/faqSchemaItems';
import { localBusinessJsonLd } from '../../constants/businessInfo';
import { websiteJsonLd } from '../../constants/websiteSchema';

const JsonLdScript = ({ data }) => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
	/>
);

const SeoSchema = () => (
	<>
		<JsonLdScript data={localBusinessJsonLd()} />
		<JsonLdScript data={websiteJsonLd()} />
		<JsonLdScript data={faqPageJsonLd()} />
	</>
);

export default SeoSchema;