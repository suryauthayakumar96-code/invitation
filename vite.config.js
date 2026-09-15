import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { weddingDetails as d } from './src/data/weddingDetails.js';
const escapeHTML = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
export default defineConfig({ plugins: [react(), tailwindcss(), {
  name: 'wedding-metadata',
  transformIndexHtml(html) {
    return html.replaceAll('__WEDDING_TITLE__', escapeHTML(`${d.groom} & ${d.bride} — Our Wedding`))
      .replaceAll('__WEDDING_DESCRIPTION__', escapeHTML(`You're invited. ${d.date} · ${d.venue}, ${d.location}. Together with our families, we celebrate a beautiful beginning.`));
  },
}] });
