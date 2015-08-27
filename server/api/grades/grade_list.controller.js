'use strict'
var _ = require('lodash');
var mongoose = require('mongoose');
var Grades = require('./grade_list.js');
var Grades = mongoose.model('Grades');


exports.getGradeList = function(req, res) {
  return Grades.find(function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err);
    }
  });
};