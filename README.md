# joi-date-extensions-browser

`joi-date-extensions` bundled for the browser

This adds extensions for extra date rules to joi

Since joi is using ES6 features, this package runs it through babel and webpack to create a bundled js file that can be used with ES5 browsers.

See [joi-date-extensions](https://github.com/hapijs/joi-date-extensions) for documentation and to raise issues.

## Until the issue with building is resolved, you may use joi-full

Until the issue with building is resolved, you may use [joi-full](https://github.com/jeffbski/joi-full) instead. It is a universal build which works in Node.js and in the browser using webpack/browserify. It includes the `joi-date-extensions` in it.

## Note: still in beta - working through issue with building

This project is still in beta and thus not yet published to npm.

Namely we have an issue when trying to use the extension we get the following error when trying to extend Joi.

You can reproduce the error using the example/with-ext by:
```bash
npm install # main
npm run prepublish # build dist
cd example/with-ext
npm install
npm start # see console of browser that is started
```

Error is:

```
Uncaught Error: [
  {
    "name": "date",
    "language": {
      "format": "must be a string with one of the following formats {{format}}"
    },
    "coerce": function coerce(value, state, options) {\n\n\t\t        if (!value || value instanceof Date || typeof value === 'number') {\n\t\t            return value;\n\t\t        }\n\n\t\t        if (options.convert && this._flags.momentFormat) {\n\t\t            var date = Moment(value, this._flags.momentFormat, true);\n\t\t            if (date.isValid()) {\n\t\t                return date.toDate();\n\t\t            }\n\n\t\t            return this.createError('date.format', { value: value, format: this._flags.momentFormat }, state, options);\n\t\t        }\n\n\t\t        return value;\n\t\t    },
    "rules": [
      {
        "name": "format",
        "description": function description(params) {\n\n\t\t            return 'Date should respect format ' + params.format;\n\t\t        },
        "params": {
          "format": {
            "isJoi": true,
            "_type": "array",
            "_settings": null,
            "_valids": {
              "_set": []
            },
            "_invalids": {
              "_set": []
            },
            "_tests": [],
            "_refs": [],
            "_flags": {
              "sparse": false,
              "single": true,
              "presence": "required"
            },
            "_description": null,
            "_unit": null,
            "_notes": [],
            "_tags": [],
            "_examples": [],
            "_meta": [],
            "_inner": {
              "items": [
                {
                  "isJoi": true,
                  "_type": "string",
                  "_settings": null,
                  "_valids": {
                    "_set": []
                  },
                  "_invalids": {
                    "_set": [
                      ""
                    ]
                  },
                  "_tests": [],
                  "_refs": [],
                  "_flags": {},
                  "_description": null,
                  "_unit": null,
                  "_notes": [],
                  "_tags": [],
                  "_examples": [],
                  "_meta": [],
                  "_inner": {}
                }
              ],
              "ordereds": [],
              "inclusions": [
                {
                  "isJoi": true,
                  "_type": "string",
                  "_settings": null,
                  "_valids": {
                    "_set": []
                  },
                  "_invalids": {
                    "_set": [
                      ""
                    ]
                  },
                  "_tests": [],
                  "_refs": [],
                  "_flags": {},
                  "_description": null,
                  "_unit": null,
                  "_notes": [],
                  "_tags": [],
                  "_examples": [],
                  "_meta": [],
                  "_inner": {}
                }
              ],
              "exclusions": [],
              "requireds": []
            }
          }
        },
        "setup": function setup(params) {\n\n\t\t            this._flags.momentFormat = params.format;\n\t\t        },
        "validate": function validate(params, value, state, options) {\n\n\t\t            // No-op just to enable description\n\t\t            return value;\n\t\t        }
      }
    ],
    "base" [31m[1][0m: {
      "isJoi": true,
      "_type": "date",
      "_settings": null,
      "_valids": {
        "_set": []
      },
      "_invalids": {
        "_set": []
      },
      "_tests": [],
      "_refs": [],
      "_flags": {},
      "_description": null,
      "_unit": null,
      "_notes": [],
      "_tags": [],
      "_examples": [],
      "_meta": [],
      "_inner": {}
    }
  }
]
[31m
[1] "base" must be an instance of "Joi object"[0m
    at Object.exports.process (http://localhost:3007/dist/main.js:5668:19)
    at _class._validateWithOptions (http://localhost:3007/dist/main.js:5246:31)
    at _class.root.validate (http://localhost:3007/dist/main.js:283:25)
    at _class.root.attempt (http://localhost:3007/dist/main.js:311:29)
    at _class.root.assert (http://localhost:3007/dist/main.js:306:16)
    at _class.root.extend (http://localhost:3007/dist/main.js:365:16)
    at Object.<anonymous> (http://localhost:3007/dist/main.js:66:20)
    at __webpack_require__ (http://localhost:3007/dist/main.js:30:30)
    at Object.<anonymous> (http://localhost:3007/dist/main.js:57:19)
    at __webpack_require__ (http://localhost:3007/dist/main.js:30:30)
```

## Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

```js
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const schema = Joi.date().format('YYYY-MM-DD');
```

## Config

To use this in your probject along with `joi-browser` you would need to install both joi-browser and moment.

```bash
npm install joi-browser
npm install moment
npm install joi-date-extensions-browser
```

In your `package.json` you can add a `browser` property to tell webpack or browserify to use the alternate package for browser use.

```json
  "browser": {
    "joi": "joi-browser",
    "joi-date-extensions": "joi-date-extensions-browser"
  },
```

## Development

```bash
npm install
npm run prepublish # when you want to rebuild
```

An example project is available for testing

```bash
cd examples/with-ext
npm install
npm start # builds and launches browser, see console messages
```
