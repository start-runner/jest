export default (options = {}) => () => {
  return function jest() {
    const jestCLI = require('jest-cli');

    return new Promise((resolve, reject) => {
      jestCLI.runCLI(options, process.cwd(), (result) => {
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
