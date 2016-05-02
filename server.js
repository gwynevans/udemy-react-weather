var express = require('express');

// Create our app
var app = express();

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.use(function (req, res, next) {
  if (req.protocol === 'http') {
    next()
  } else {
    res.redirect('http://' + req.hostname + req.url)
  }
});

app.use(express.static('public'));

app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
