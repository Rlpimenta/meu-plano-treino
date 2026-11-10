import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const dist = path.join(root, 'dist');
await mkdir(root, { recursive: true });
for (const entry of ['index.html', 'assets', 'vite.svg']) await rm(path.join(root, entry), { recursive: true, force: true });
await cp(dist, root, { recursive: true });
console.log('GitHub Pages atualizado a partir de dist/.');
