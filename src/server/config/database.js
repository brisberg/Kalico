var mongoose = require('mongoose');

function connect(connectionString) {
  mongoose.Promise = require('bluebird');

  mongoose.connect(connectionString, function () {
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function callbck() {
        console.log('Mongoose connected at: ', connectionString);
    });
  });
}

module.exports = connect;
