const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('uikit.css')
  .hasFile('uikit.min.css')
  .hasFile('uikit.js')
  .hasFile('uikit.min.js');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
