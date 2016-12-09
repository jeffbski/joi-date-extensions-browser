# joi-date-extensions-browser

`joi-date-extensions` bundled for the browser

This adds extensions for extra date rules to joi

Since joi is using ES6 features, this package runs it through babel and webpack to create a bundled js file that can be used with ES5 browsers.

See [joi-date-extensions](https://github.com/hapijs/joi-date-extensions) for documentation and to raise issues.

## Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const schema = Joi.date().format('YYYY-MM-DD');

## Development

```bash
npm install
npm run prepublish # when you want to rebuild
```

An example project is available for testing

```bash
cd examples/with-ext
npm install
npm start // builds and launches browser, see console messages
```
