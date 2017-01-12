const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const api = require('./api')
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'build')));
// Always return the main index.html, so react-router render the route in the client
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

app.use('/api', api())

module.exports = app;
