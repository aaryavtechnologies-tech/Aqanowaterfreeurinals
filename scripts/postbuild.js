import fs from 'fs';
import path from 'path';

const distHtml = path.resolve('dist/index.dev.html');
const targetHtml = path.resolve('dist/index.html');
if (fs.existsSync(distHtml)) {
  fs.copyFileSync(distHtml, targetHtml);
}

// Ensure folders exist
if (!fs.existsSync(path.resolve('assets'))) {
  fs.mkdirSync(path.resolve('assets'), { recursive: true });
}
if (!fs.existsSync(path.resolve('public/assets'))) {
  fs.mkdirSync(path.resolve('public/assets'), { recursive: true });
}

// Copy compiled bundles to assets/ and public/assets/
const appJs = path.resolve('dist/assets/app.js');
const appCss = path.resolve('dist/assets/app.css');

if (fs.existsSync(appJs)) {
  fs.copyFileSync(appJs, path.resolve('assets/app.js'));
  fs.copyFileSync(appJs, path.resolve('public/assets/app.js'));
}
if (fs.existsSync(appCss)) {
  fs.copyFileSync(appCss, path.resolve('assets/app.css'));
  fs.copyFileSync(appCss, path.resolve('public/assets/app.css'));
}

console.log('✓ Postbuild: synced production assets to assets/ and public/assets/');
