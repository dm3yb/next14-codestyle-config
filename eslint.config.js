/** @type { import("eslint").Linter.Config[] } */
module.exports = {
  extends: ['next/core-web-vitals', 'next', 'prettier'],
  plugins: ['@next/next', 'unicorn'],
  rules: {
    '@next/next/no-img-element': 'warn',
    '@next/next/no-sync-scripts': 'error',
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-page-custom-font': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'no-debugger': 'error',
    eqeqeq: ['error', 'always'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
  },
};
