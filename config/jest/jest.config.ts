import type { Config } from "jest";
import path from "path";

const config: Config = {
  clearMocks: true,
  coveragePathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },
  modulePaths: ["<rootDir>src"],
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  rootDir: "../../",
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  globals: {
    __IS_DEV__: true,
  },
};

export default config;
