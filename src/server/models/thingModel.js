/**
 * Created by Brandon Risberg on 12/31/2016.
 */

var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    count: Number,
});

var Model = mongoose.model('things', schema);

module.exports = Model;
