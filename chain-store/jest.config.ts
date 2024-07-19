/* eslint-disable */
export default {
  displayName: 'chain-store',
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/chain-store',
  setupFilesAfterEnv: ['../setup-jest.js'],
};
