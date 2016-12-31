/**
 * Created by Brandon Risberg on 12/31/2016.
 */

var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    cash: Number,
    inventory: [
      {ware: {type: mongoose.Schema.Types.ObjectId, ref: 'wares'}, quantity: Number}
    ],
});

var Model = mongoose.model('pilots', schema);

module.exports = Model;
