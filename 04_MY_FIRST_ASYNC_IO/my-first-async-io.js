'use strict'

const fs = require('fs')
const input = process.argv[2]

fs.readFile(input, function(err, data) {
  if (err) {
    return console.log(err)
  }
  const lines = data.toString().split('\n').length - 1
  console.log(lines)
})
