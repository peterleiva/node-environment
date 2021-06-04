[![Code Style](https://github.com/theFiero/node.env-inspector/actions/workflows/code-style.yml/badge.svg)](https://github.com/theFiero/node.env-inspector/actions/workflows/code-style.yml) [![Publish to NPM](https://github.com/theFiero/node.env-inspector/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/theFiero/node.env-inspector/actions/workflows/publish-npm.yml)

# node.env-inspector

Inspect or return the environment variable `NODE_ENV`

## Requirements

`node >=12`

## Features

-   Consult `NODE_ENV` known values (`dev`, `development`, `production`, `prod`)
-   Give `development` as default value
-   Return the raw value from `NODE_ENV`
-   All queries are case-insensitive

## Installation

Install `node.env-inspector` with npm

```bash
  npm install node.env-inspector
```

## Usage/Examples

Using CommonJS modules

```javascript
const { env } = require('node.env-inspector')
```

Using ECMAScript modules

```javascript
import { env } from 'node.env-inspector'
```

```javascript
process.env.NODE_ENV = 'dev'

env('development') // true
env() // "dev"
```

## API Reference

The package only expose one function:

```javascript
  env(query?: string): boolean | string
```

#### Aliases:

`prod == production`

`dev == development`

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
