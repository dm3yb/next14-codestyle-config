module.exports = {
  extends: [
    "next",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "@next/next", "unicorn", "react-hooks"],
  rules: {
    "@next/next/no-img-element": "warn",
    "@next/next/no-sync-scripts": "error",
    "@next/next/no-html-link-for-pages": "error",
    "@next/next/no-page-custom-font": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        arrowParens: "always",
        trailingComma: "none",
        printWidth: 100,
        tabWidth: 2,
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
    "no-debugger": "error",
    eqeqeq: ["error", "always"],
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
  },
};
