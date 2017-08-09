export default (userOptions = {}) => () => {
  const options = {
    ...userOptions,
    rootDir: userOptions.rootDir || process.cwd
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
