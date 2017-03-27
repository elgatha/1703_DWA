// These are dependecies
const express = require('express');
//This parses the json data
const bodyParser = require('body-parser');

// debugs
const debug = require("./modules/debug");

// This is express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// This is routes
app.use('/', require('./routes')(express));

// This is the configuration for the server
 const port = process.env.PORT || 3000;
// This is the export server
exports.server = app.listen(port, () => {
  console.log('Server Active On', port);
  if (process.env.DEBUG) {
     debug.debug('Debugging is Active!', 'Success');
 }
});
