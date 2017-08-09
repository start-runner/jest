const optionsToStringify = [
  'coverageThreshold',
  'globals',
  'haste',
  'moduleNameMapper',
  'resolver',
  'transform'
];

export default (userOptions = {}) => () => {
  const options = {
    ...userOptions,
    rootDir: userOptions.rootDir || process.cwd(),
    ...optionsToStringify.reduce((result, key) => {
      if (userOptions[key]) {
        result[key] = JSON.stringify(userOptions[key]);
      }

      return result;
    }, {})
  };

  const projects = options.projects || [ options.rootDir ];

  return function jest() {
    const jestCLI = require('jest-cli');

    return new Promise((resolve, reject) => {
      jestCLI.runCLI(options, projects, (result) => {
        if (
          result.numFailedTests > 0 ||
          result.numFailedTestSuites > 0 ||
          result.numTotalTests === 0
        ) {
          return reject();
        }

        resolve();
      });
    });
  };
};
