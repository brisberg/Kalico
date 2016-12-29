/**
 * REST API server to support the frontend
 */
var express = require('express');
var app = express();

app.get('/api/things', function(req, res){
  var things = {first:'data', second:'data2'};

   res.type('application/json');
   res.send(things);
});

app.get('/api/trucks', function(req, res){
  var trucks = {monster:'data', foobar:'data2'};

   res.type('application/json');
   res.send(trucks);
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function () {
    console.log('Server is listening at %s', app.get('port'));
});

