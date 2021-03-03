'use strict';
// 1st Part Dependencies


// 3rd Party Dependencies
const express = require('express')

// Application Constants
const app = express()

app.use(express.json());

// internal modules
const notFound = require('./src/error-handlers/404.js')
const erros = require('./src/error-handlers/500.js')
const logger = require('./src/middleware/logger.js')



//Errors
app.use('*', notFound)
app.use(errors)

const start = (port) => {
  app.listen(port, () => {
    console.log(`Listening on PORT ${port}`)
  });
}

module.exports = {
  server: app,
  start: start
};