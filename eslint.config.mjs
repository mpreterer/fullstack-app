import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js, ts,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ["build", "node_modules", "coverage", "eslint.config.js"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "prefer-const": "error",
      'max-lines': ['warn', { max: 124 }],
      'max-params': ['error', 3],
    },
  },
  ...tseslint.configs.recommended,
];
