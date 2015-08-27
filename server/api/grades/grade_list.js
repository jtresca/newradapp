'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GradeSchema = new Schema({
 eval: Number,
 cat: String,
 subcat: String,
 rating: Array
});

mongoose.model('Grades', GradeSchema);