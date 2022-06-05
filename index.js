var optional;

console.log(`Node 14! ${optional?.chaining}`);

'use strict'
process.title = 'Hypixel Discord Chat Bridge'

const app = require('./src/Application')

app
  .register()
  .then(() => {
    app.connect()
  })
  .catch(err => {
    console.error(err)
  })
