const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');

// Set up Basic Auth middleware
app.use(basicAuth({
    users: { 'username': 'password' },
    challenge: true
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/license.lic');
});

app.listen(3000, function() {
  console.log('App listening on port 3000 with Basic Auth!');
});
