'use strict';
var _ = require('lodash');
var mongoose = require('mongoose');

var Results = require('./student_results.js');
var Results = mongoose.model('Results');


module.exports.index = function(req, res) {
  Results.find(function (err, things) {
    if(err) { throw err; }
    return res.json(200, things);
  });
};

module.exports.postStudentResults = function(req, res) {

  Results.create(req.body, function (err, results) {
      if (!err) {
      return res.json(results);
      } else {
      return res.send(err);
      }
  });
};
