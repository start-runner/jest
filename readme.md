# start-jest

[![npm](https://img.shields.io/npm/v/start-jest.svg?style=flat-square)](https://www.npmjs.com/package/start-jest)
[![linux build](https://img.shields.io/travis/start-runner/jest/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/jest)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/jest/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/jest)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/jest/master.svg?style=flat-square)](https://codecov.io/github/start-runner/jest)
[![deps](https://img.shields.io/gemnasium/start-runner/jest.svg?style=flat-square)](https://gemnasium.com/start-runner/jest)

[Jest](https://facebook.github.io/jest/) task for [Start](https://github.com/start-runner/start).

## Install

```sh
npm install --save-dev start-jest
# or
yarn add --dev start-jest
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import env from 'start-env';
import jest from 'start-jest';

const start = Start(reporter());

export const test = () => start(
  env('NODE_ENV', 'test'),
  jest({
    moduleNameMapper: {
      '^~/(.*)$': '<rootDir>/packages/$1'
    },
    roots: [
      '<rootDir>/packages/neoform/'
    ],
    testMatch: [
      '**/tests/*.jsx'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      '**/src/*.jsx'
    ],
    coverageReporters: [
      'lcov',
      'text-summary'
    ],
    snapshotSerializers: [
      'enzyme-to-json/serializer'
    ]
  })
);
```

## Arguments

`jest(options)`

* `options` – [Jest CLI options](https://github.com/facebook/jest/blob/8e30070edb3dcdc49fb86e94aaf0006520535295/packages/jest-cli/src/cli/args.js#L49-L279)

:information_desk_person: `{ config: '.jestrc' }`
