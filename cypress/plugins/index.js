const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
  on('task', codeCoverageTask);
  return config;
};
