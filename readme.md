# arg-find

Write functions that accept arguments in any order (so long as each is of a unique type). It’s weird, yes, but I sometimes find this useful for handling optional parameters.

[![Build status](https://travis-ci.org/michaelrhodes/arg-find.svg?branch=master)](https://travis-ci.org/michaelrhodes/arg-find)

## Install
```sh
$ npm install arg-find
```

### Example

``` js
var find = require('arg-find')

function fn () {
  var arg = find(arguments)
  var opt = arg('object') || {}
  var cb = arg('function')

  opt.throw ?
    cb(new Error) :
    cb(null)
}

fn(function (err) {
  console.log(err)
  > null
})

fn({ throw: true }, function (err) {
  console.log(err instanceof Error)
  > true
})

fn(function (err) {
  console.log(err instanceof Error)
  > true
}, { throw: true })
```

### License
[MIT](http://opensource.org/licenses/MIT)
