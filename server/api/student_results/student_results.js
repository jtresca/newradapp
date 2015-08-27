'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var ResultsSchema = new Schema({
        fname: String,
        lname: String,
        date: Date,
        semester: Array,
        year: Array,
        site: Array,
        mrn: Array,
        pType: Array,
        compType: Array,
        gender: Array,
        score: Number,
        exam: { 
                procedure: String
        }
});


mongoose.model('Results', ResultsSchema);
