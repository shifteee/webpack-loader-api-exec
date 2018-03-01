Webpack-loader-api-exec
=======================

Since webpack team deprecate usage `this.exec` inside [Loader Api](https://webpack.js.org/api/loaders/#this-exec) we need in something that could execute code string as normal javascript.  This module provide similar functionality

## Usage
```javascript
const exec = require('webpack-loader-api-exec');

module.exports = function(code) {
    const ctx = {}
    const opts = {}
    const content = (typeof code === 'string')
        ? exec(code, opts, ctx)
        : code;

    // process content
    // ...

    return result;
}
```