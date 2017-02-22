var jsonfile = require('jsonfile')

var file = '/var/log/app.log'
var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
var obj = "{'@message': 'I am Groot'}"

jsonfile.writeFileSync(file, obj, {flag: 'a'} )
