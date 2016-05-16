var express = require('express');

var path = require('path');
var appRootDirectory = path.dirname(require.main.filename);

var app = express();

// Set environment
app.set('port', (process.env.PORT || 5000));
// Legacy routes for UI prototypes
app.get('/:file_name', function(request, response) {
  response.sendFile('./' + request.params.file_name, { root: __dirname});
});

app.listen(app.get('port'), function(){
  console.log('ui-server listening on port ' + app.get('port'))
});
