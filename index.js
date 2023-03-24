const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/license.lic');
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
