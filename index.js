var t = require('tiny-typeof')
var slice = Array.prototype.slice

module.exports = function (args) {
  var xargs = slice.call(args)

  return function (type) {
    var i = xargs.length
    while (i--) {
      if (t(v = xargs[i]) === type) {
        // Remove the found item from the args
        // to speed up subsequent `arg-find` calls.
        return xargs.splice(i, 1)[0]
      }
    }
  }
}
