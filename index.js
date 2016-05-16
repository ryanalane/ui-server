var express = require('express');

var path = require('path');
var appRootDirectory = path.dirname(require.main.filename);

var app = express();

// Set environment
app.set('port', (process.env.PORT || 5000));

// Routes for static files
app.use(express.static(__dirname));

// Sample API GET request handler
app.get('/front_end_api/accounts/current', function(request, response) {
  response.status(201).send({"user":{"name":"Name of Current User"}});
});

// Sample API POST request handler
app.post('/front_end_api/session', function(request, response) {
  response.status(201).send();
});

app.listen(app.get('port'), function(){
  console.log('ui-server listening on port ' + app.get('port'))
});
