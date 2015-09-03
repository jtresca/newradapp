'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Exams Schema
 */
/**  
Pulling in data from compForm.js to update this Schema
that files can be viewed in dropbox/rad-ap/compForm.js
Delete These comments when Schema is completed
*/
var ExamsSchema = new Schema({
    fname: String,
    lname: String,
    date: Date,
    semester: Array,
    year: Array,
    exam: Array,
    site: Array,
    mrn: Array,
    pType: Array,
    compType: Array,
    gender: Array
  });


module.exports = mongoose.model('Exams', ExamsSchema);
