'use strict'
var _ = require('lodash');
var mongoose = require('mongoose');

var Results = require('./student_results.js');
var Results = mongoose.model('Results');


exports.index = function(req, res) {
  Results.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

exports.postStudentResults = function(req, res) {

  Results.create(req.body, function (err, results) {
      if (!err) {
      return res.json(results);
      } else {
      return res.send(err);
      }
  });
};