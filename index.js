
var CBOR = require('cbor')
var fs = require('fs')
var path = require('path')

var ary = 
fs.readdirSync(path.join(__dirname, '.pijul', 'patches')).map(function(file) {
  var full = path.join(__dirname, '.pijul', 'patches', file)
  var v
  CBOR.decodeFirst(fs.readFileSync(full), function (err, value) {
    v = value
    console.log(file)
    console.log(JSON.stringify(value))
  })
  return v
})

console.log(ary)
