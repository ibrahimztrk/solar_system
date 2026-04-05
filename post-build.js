import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'glob';

const files = globSync('dist/**/*.html');
for (const f of files) {
  let html = readFileSync(f, 'utf-8');
  html = html.replace(/="\/(_astro\/[^"]+)"/g, '="./$1"');
  writeFileSync(f, html);
}
console.log(`Fixed ${files.length} file(s)`);
