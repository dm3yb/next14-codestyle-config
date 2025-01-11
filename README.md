[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# NextJS v14 Code Style Package

A comprehensive `ESLint` and `prettier` configuration package created for `Next.js v14` projects. This package provides a standardized code style setup with support for `Next.js`, and `TailwindCSS`.

---

## Requirements

```bash
"eslint": "^8.0.0"
"prettier": ">= 3.3.3"
```

---

## Installation

using `npm`:

```bash
$ npm install -D @dm3yb/next14-codestyle-config prettier
```

using `yarn`:

```bash
$ yarn add -D @dm3yb/next14-codestyle-config prettier
```

using `pnpm`:

```bash
$ pnpm add -D @dm3yb/next14-codestyle-config prettier
```

---

## Setup

Create or update `.eslintrc.js` in your project root:

> you probably need to rename the file: `.eslintrc.json` -> `.eslintrc.js`

```js
// .eslintrc.js

module.exports = require('@dm3yb/next14-codestyle-config/.eslintrc.js');
```

Create or update `prettier.config.js` in your project root:

```js
// prettier.config.js

module.exports = require('@dm3yb/next14-codestyle-config/prettier.config.js');
```

---

## License

MIT © [Dmitry Bobryshev](https://dm3yb.dev)

---

## Issues

If you encounter any issues or have suggestions, please [create an issue](https://github.com/dm3yb/next14-codestyle-config/issues).

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
