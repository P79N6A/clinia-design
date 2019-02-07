const uikit = require('./components');

const req = require.context('./components', true, /^\.\/locale-provider\/.+_.+\.tsx$/);

uikit.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  uikit.locales[matches[1]] = req(mod).default;
});

module.exports = uikit;
