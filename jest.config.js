module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/index.tsx',
    '.*.snap.*',
  ],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  snapshotResolver: '<rootDir>/snapshotResolver.js',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports/jest',
        filename: 'report.html',
        expand: true,
      },
    ],
  ],
};
