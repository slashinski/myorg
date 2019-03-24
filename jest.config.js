module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts)?(x)'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest'
  },
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['html']
};
