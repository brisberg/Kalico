/**
 * REST API server to support the frontend
 */
var express = require('express');
var app = express();
var Thing = require('./models/thingModel');

// db bootstrap
require('./config/database')(process.env.DATABASE_URL || 'mongodb://db/kalico_db');

app.get('/api/things/create', function(req, res, next){
  if (!req.query.count) {
    res.status(403).send({ error: 'Must supply count query param' })
    next()
  }

  var thing = Thing({
    count: req.query.count
  })

  thing.save(function(err) {
    if (err) throw next(err);

    console.log('Thing created!');
    res.type('application/json');
    res.send(thing)
    next()
  });
});

app.get('/api/things', function(req, res, next){
  Thing.find({}, function (err, records) {
    if (err) return next(err);

    res.type('application/json');
    res.send(records);
  });
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

