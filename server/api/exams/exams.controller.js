'use strict'
var _ = require('lodash');
var mongoose = require('mongoose');
var Exams = require('./exams_list.js');
var Exams = mongoose.model('Exams');

exports.getExamList = function(req, res) {
  return Exams.find(function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err);
    }
  });
};