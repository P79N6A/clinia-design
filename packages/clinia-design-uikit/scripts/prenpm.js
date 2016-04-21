/* eslint strict: 0, no-console: 0 */
'use strict';

const fs = require('fs');
const cwd = process.cwd();
const path = require('path');
const originalIndex = fs.readFileSync(path.join(cwd, 'lib/index.js'), 'utf-8');
const newIndex = originalIndex
  .replace(/\/components\//g, '/');
fs.writeFileSync(path.join(cwd, 'lib/index.js'), newIndex, 'utf-8');
const antdCss = path.join(cwd, 'dist/antd.css');
fs.createReadStream(antdCss)
  .pipe(fs.createWriteStream(path.join(cwd, 'lib/index.css')));
const typings = path.join(cwd, 'type-definitions/antd.d.ts');
fs.createReadStream(typings)
  .pipe(fs.createWriteStream(path.join(cwd, 'dist/antd.d.ts'), 'utf-8'));
console.log('prenpm done');
