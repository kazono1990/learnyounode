'use strict'

const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const extention = '.' + process.argv[3]

fs.readdir(dir, function(err, list) {
  if (err) return console.error(err)

  list.forEach(function(file) {
    if (path.extname(file) === extention) {
      console.log(file)
    }
  })
})
