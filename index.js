var express = require('express');

var path = require('path');

var app = express();

// Set environment
app.set('port', (process.env.PORT || 5000));

// Routes for static files
app.use(express.static(__dirname));

// Sample API GET request handler
app.get('/front_end_api/accounts/current', function(request, response) {
  response.status(201).send({"name":"Name of Current User"});
  console.log('the Backbone bro came through :)');
});

// Sample API POST request handler
app.post('/front_end_api/session', function(request, response) {
  response.status(201).send();
});
app.delete('/front_end_api/session', function(request, response) {
  response.status(201).send();
  console.log('and someone signed out!');
});

app.listen(app.get('port'), function(){
  console.log('ui-server listening on port ' + app.get('port'))
});
