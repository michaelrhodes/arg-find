var test = require('tape')
var find = require('./index')

test('it works', function (assert) {
  var undef = void 0

  !(function scoped (str, obj, nil, num, custom, fn, arr, args, bool, date, regexp) {
    var arg = find(arguments)
    assert.equal(arg('string'), str)
    assert.equal(arg('string'), undef)
    assert.equal(arg('date'), date)
    assert.equal(arg('date'), undef)
    assert.equal(arg('object'), obj)
    assert.equal(arg('object'), undef) 
    assert.equal(arg('arguments'), args)
    assert.equal(arg('arguments'), undef)
    assert.equal(arg('number'), num)
    assert.equal(arg('number'), undef) 
    assert.equal(arg('function'), fn)
    assert.equal(arg('function'), undef)
    assert.equal(arg('boolean'), bool)
    assert.equal(arg('boolean'), undef)
    assert.equal(arg('regexp'), regexp)
    assert.equal(arg('regexp'), undef)
    assert.equal(arg('array'), arr)
    assert.equal(arg('array'), undef)
    assert.equal(arg('customtype'), custom)
    assert.equal(arg('customtype'), undef)
    assert.equal(arg('null'), nil)
    assert.equal(arg('null'), undef)
    assert.equal(arg('undefined'), undef)
    assert.end()
  })(
    'a', {}, null, 0, new CustomType, function (){},
    [], arguments, false, new Date, /regexp/
  )

  function CustomType () {}
})
