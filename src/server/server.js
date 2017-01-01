/**
 * REST API server to support the frontend
 */
var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var Thing = require('./models/thingModel');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// db bootstrap
require('./config/database')(process.env.DATABASE_URL || 'mongodb://db/kalico_db');

app.post('/api/things', function(req, res, next){
  var count = req.body.count;

  if (!count) {
    res.status(400).send({ error: 'Must supply \'count\' post param' })
    return
  }

  var thing = Thing({
    count: count
  })

  thing.save(function(err) {
    if (err) throw next(err);

    res.type('application/json');
    res.status(200).send(thing)
  });
});

app.delete('/api/things/:id', function(req, res, next){
  var id = req.params.id

  if (!id) {
    res.status(404).send({ error: 'Must sypply \'id\' url param' })
    return
  }

  Thing.findByIdAndRemove(id, function (err, thing){
    if(err) return next(err);

    if (!thing) {
      res.status(404).send({ error: 'No document found for id:' + id })
    }
    else {
      res.type('application/json');
      res.status(200).send(thing)
    }
  })
});

app.get('/api/things', function(req, res, next){
  Thing.find({}, function (err, records) {
    if (err) return next(err);

    res.type('application/json');
    res.status(200).send(records);
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

