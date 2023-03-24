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

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/license.lic');
});

// Create HTTPS server and listen on port 3000
https.createServer(app).listen(3000, function() {
  console.log('App listening on port 3000 with HTTPS and Basic Auth!');
});
