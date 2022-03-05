import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
}
export default config

