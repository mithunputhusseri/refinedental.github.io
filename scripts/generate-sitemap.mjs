import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SITE_URL = 'https://refinedental.co';
const LASTMOD = new Date().toISOString().slice(0, 10);

const paths = [
	'/',
	'/faq',
	'/blog',
	'/services/dental-implants',
	'/services/conservative-endodontics',
	'/services/orthodontics',
	'/services/periodontics',
	'/services/prosthodontics',
	'/services/pedodontics',
	'/services/oral-surgery',
	'/services/laser-dentistry',
	'/services/full-mouth-rehabilitation',
];

const toLoc = (path) => {
	if (path === '/') {
		return `${SITE_URL}/`;
	}
	return `${SITE_URL}/#${path}`;
};

const urlEntries = paths
	.map(
		(path) => `  <url>
    <loc>${toLoc(path)}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/services/') ? '0.8' : '0.7'}</priority>
  </url>`
	)
	.join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outPath = join(root, 'public', 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`Wrote ${outPath} (${paths.length} URLs)`);