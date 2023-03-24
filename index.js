const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const basicAuth = require('express-basic-auth');

// Set up Basic Auth middleware
app.use(basicAuth({
    users: { 'username': 'password' },
    challenge: true
}));

// Set up HTTPS options
const options = {
  key: fs.readFileSync('path/to/key.pem'),
  cert: fs.readFileSync('path/to/cert.pem')
};

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/license.lic');
});

// Create HTTPS server and listen on port 3000
https.createServer(options, app).listen(3000, function() {
  console.log('App listening on port 3000 with HTTPS and Basic Auth!');
});
