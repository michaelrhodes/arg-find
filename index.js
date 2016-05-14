var t = require('tiny-typeof')
var slice = Array.prototype.slice

module.exports = function (args) {
  var xargs = slice.call(args)

  return function (type) {
    // Including word boundaries will prevent
    // Array from matching ArrayBuffer, etc.
    var typex = RegExp('\\b' + type + '\\b', 'i')

    var i = xargs.length
    while (i--) {
      v = xargs[i]
      if (typex.test(t(v))) {
        // Remove the found item from the args
        // to speed up subsequent `arg-find` calls.
        return xargs.splice(i, 1)[0]
      }
    }
  }
}
