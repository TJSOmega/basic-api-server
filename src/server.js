'use strict';
// 1st Part Dependencies


// 3rd Party Dependencies
const express = require('express')

// Application Constants
const app = express()

app.use(express.json());

// internal modules
const notFound = require('./error-handlers/404.js')
const errors = require('./error-handlers/500.js')
const logger = require('./middleware/logger.js')
const animalRoutes = require('./routes/animals.js')
const sodaRoutes = require('./routes/soda.js')
app.get('/', homeRoute)
app.use(animalRoutes)
app.use(sodaRoutes)


function homeRoute(req,res) {
  res.send('Welcome to my Basic-API-App!')
}

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