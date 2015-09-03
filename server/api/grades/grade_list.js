'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GradeSchema = new Schema({
 evalu: Number,
 cat: String,
 subcat: String,
 rating: Array
});

mongoose.model('Grades', GradeSchema);