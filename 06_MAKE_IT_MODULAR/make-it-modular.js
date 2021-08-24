'use strict'
const filter = require('./mymodule.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filter(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
