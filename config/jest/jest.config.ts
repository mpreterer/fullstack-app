import type { Config } from "jest";

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
  rootDir: "../../",
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
};

export default config;
