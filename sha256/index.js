var shajs = require('sha.js')

console.log(shajs('sha256').update('42').digest('hex'))