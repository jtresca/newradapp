'use strict';

var mongoose = require('mongoose');
// var User = mongoose.model('User');
// var User = mongoose.model('User');
var Grades = require('../api/grades/grade_list.js');
var Exams = require('../api/exams/exams_list.js');
var Exams = mongoose.model('Exams');
var Grades = mongoose.model('Grades');
  // Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */
 /**
Putting in data from dropbox/rad-app/compForm.js
delete these comments when it works.
 */
Exams.find({}).remove(function() {
  Exams.create({
  fname: '',
  lname: '',
  date: Date.now(),
  semester: ["Q1","Q2","Q3","Q4"],
  year: ['Junior', 'Senior'],
  exam: [ {procedure: 'Chest Routine', require: 'mandatory', region: 'thorax'},
      {procedure: 'Chest AP', require: 'mandatory', region: 'thorax'},
      {procedure: 'Ribs', require: 'mandatory', region: 'thorax'},
      {procedure: 'Chest Lateral Decubitus', require: 'elective', region: 'thorax'},
      {procedure: 'Sternum', require: 'elective', region: 'thorax'},
      {procedure: 'Soft-Tissue Neck', require: 'elective', region: 'thorax'},
      {procedure: 'Finger', require: 'mandatory', region: 'thorax'},
      {procedure: 'Hand', require: 'mandatory', region: 'upper extremity'},
      {procedure: 'Wrist', require: 'mandatory', region: 'upper extremity'},
      {procedure: 'Forearm', require: 'mandatory', region: 'upper extremity'},
      {procedure: 'Elbow', require: 'mandatory', region: 'upper extremity'},
      {procedure: 'Humerus', require: 'mandatory', region: 'upper extremity'},
      {procedure: 'Shoulder', require: 'mandatory', region: 'upper extremity'},
      {procedure: 'Scapula', require: 'elective', region: 'upper extremity'},
      {procedure: 'Trauma: Shoulder (Transthoracic, Scapula Y, Axillary)', require: 'mandatory', region: 'upper extremity'},
      {procedure: 'Clavicle', require: 'elective', region: 'upper extremity'},
      {procedure: 'AC joints', require: 'elective', region: 'upper extremity'},
      {procedure: 'Trauma: Upper Extremity non-shoulder', require: 'mandatory', region: 'upper extremity'},
      {procedure: 'Toe', require: 'elective', region: 'lower extremity'},
      {procedure: 'Foot', require: 'mandatory', region: 'lower extremity'},
      {procedure: 'Ankle', require: 'mandatory', region: 'lower extremity'},
      {procedure: 'Knee', require: 'mandatory', region: 'lower extremity'},
      {procedure: 'Tibia-Fibula', require: 'mandatory', region: 'lower extremity'},
      {procedure: 'Femur', require: 'mandatory', region: 'lower extremity'},
      {procedure: 'Trauma Lower Extremity', require: 'mandatory', region: 'lower extremity'},
      {procedure: 'Patella', require: 'elective', region: 'lower extremity'},
      {procedure: 'Calcaneus (Os Calcis)', require: 'elective', region: 'lower extremity'},
      {procedure: 'Skull', require: 'elective', region: 'head'},
      {procedure: 'Paranasal Sinuses', require: 'elective', region: 'head'},
      {procedure: 'Facial Bones', require: 'elective', region: 'head'},
      {procedure: 'Orbits', require: 'elective', region: 'head'},
      {procedure: 'Zygomatic Arches', require: 'elective', region: 'head'},
      {procedure: 'Nasal Bones', require: 'elective', region: 'head'},
      {procedure: 'Mandible', require: 'elective', region: 'head'},
      {procedure: 'Cervical Spine', require: 'mandatory', region: 'spine and pelvis'},
      {procedure: 'Trauma Cervical Spine (Cross-Table lateral)', require: 'elective', region: 'spine and pelvis'},
      {procedure: 'Thoracic Spine', require: 'mandatory', region: 'spine and pelvis'},
      {procedure: 'Lumbar Spine', require: 'mandatory', region: 'spine and pelvis'},
      {procedure: 'Pelvis', require: 'mandatory', region: 'spine and pelvis'},
      {procedure: 'Hip', require: 'mandatory', region: 'spine and pelvis'},
      {procedure: 'Hip Cross-Table Lateral', require: 'mandatory', region: 'spine and pelvis'},
      {procedure: 'Sacrum and/or Coccyx', require: 'elective', region: 'spine and pelvis'},
      {procedure: 'Scoliosis Series', require: 'elective', region: 'spine and pelvis'},
      {procedure: 'Sacroiliac joints', require: 'elective', region: 'spine and pelvis'},
      {procedure: 'Abdomen Supine (KUB)', require: 'mandatory', region: 'abdomen'},
      {procedure: 'Abdomen Upright', require: 'mandatory', region: 'abdomen'},
      {procedure: 'Abdomen Decubitus', require: 'elective', region: 'abdomen'},
      {procedure: 'Intravenous Urography', require: 'elective', region: 'abdomen'},
      {procedure: 'Fluoroscopy: Upper GI Series (Single or Double Contrast)', require: 'elective', region: 'fluoroscopy'},
      {procedure: 'Fluoroscopy: Barium Enema (Single or Double Contrast)', require: 'elective', region: 'fluoroscopy'},
      {procedure: 'Fluoroscopy: Small bowel Series', require: 'elective', region: 'fluoroscopy'},
      {procedure: 'Fluoroscopy: Esophagus', require: 'elective', region: 'fluoroscopy'},
      {procedure: 'Fluoroscopy: ERCP', require: 'elective', region: 'fluoroscopy'},
      {procedure: 'Fluoroscopy: Myelography', require: 'elective', region: 'fluoroscopy'},
      {procedure: 'Fluoroscopy: Arthrography', require: 'elective', region: 'fluoroscopy'},
      {procedure: 'C-Arm Procedure (Orthopedic)', require: 'mandatory', region: 'surgical study'},
      {procedure: 'C-Arm Procedure (Non-Orthopedic)', require: 'elective', region: 'surgical study'},
      {procedure: 'Mobile (Portable) Study: Chest', require: 'mandatory', region: 'Mobile Studies'},
      {procedure: 'Mobile (Portable) Study: Abdomen', require: 'mandatory', region: 'Mobile Studies'},
      {procedure: 'Mobile (Portable) Study: Orthopedic', require: 'mandatory', region: 'Mobile Studies'},
      {procedure: 'Pediatrics (age 6 or less): Chest', require: 'mandatory', region: 'Pediatrics'},
      {procedure: 'Pediatrics (age 6 or less): Upper extremity', require: 'elective', region: 'Pediatrics'},
      {procedure: 'Pediatrics (age 6 or less): Lower extremity', require: 'elective', region: 'Pediatrics'},
      {procedure: 'Pediatrics (age 6 or less): Abdomen', require: 'elective', region: 'Pediatrics'},
      {procedure: 'Pediatrics (age 6 or less): Mobile Study', require: 'elective', region: 'Pediatrics'}
      ],
  site: ['Brookhaven Memorial Hospital', 'Mather Memorial Hospital', 'Peconic Bay Medical Center'],
  mrn: [],
  pType: ['Adult', 'Pediatric', 'Uncooperative', 'Stretcher', 'Wheelchair', 'Trauma'],
  compType: ['Initial', 'Terminal', 'Simulated'],
  gender: ['Male', 'Female']
}, // end of compForm.js from dropbox
function() {
      console.log('finished populating Exams');
    }
  );
});

/*
Category and button data for the exam portion. This is the default exam button comments
*/
//Clear old things, then add things in
Grades.find({}).remove(function() {
  Grades.create(
  // Category: Radiation Protection
  {
    eval: 1,
    cat: 'Rad Pro',
    subcat: 'SHIELDING',
    rating: [ { desc: 'forgot to use or felt unnecessary to use', ratename: 'unsatisfactory', score: 1},
              { desc: 'used but used improperly', ratename: 'marginal', score: 2},
              { desc: 'at expected level, but room for improvement', ratename: 'satisfactory', score: 3},
              { desc: 'shielding visible on image, but did not interfere with desired anatomy', ratename: 'outstanding', score: 4}]
  }, // Eval 1
  {
    eval: 2,
    cat: 'Rad Pro',
    subcat: 'COLLIMATION',
    rating: [ { desc: 'did not collimate', ratename: 'unsatisfactory', score: 1 },
              { desc: 'minimal evidence of collimation on image', ratename: 'marginal', score: 2 },
              { desc: 'evidence of two-sided collimation', ratename: 'satisfactory', score: 3 },
              { desc: 'evidence of four-sided collimation', ratename: 'outstanding', score: 4} ]

  },// Eval 2
  {
    eval: 3,
    cat:'Rad Pro',
    subcat: 'EXPOSURE',
    rating: [ { desc: 'lacks knowledge of the exposure index number, or guessed technique',ratename: 'unsatisfactory', score: 1},
              { desc: 'diagnostically acceptable, but not optimal quality or needed prompting',ratename: 'marginal', score: 2},
              { desc: 'sufficient density and contrast, with acceptable index number',ratename: 'satisfactory', score: 3 },
              { desc: 'near perfect exposure index or determined optimum technique to achieve appropriate density and contrast', ratename: 'outstanding', score: 4}]
  },// Eval 3
  {
    eval: 4,
    cat:'Rad Pro',
    subcat: 'PREGNANCY',
    rating: [
              { desc: 'did not ask patient if potentially pregnant', ratename: 'unsatisfactory', score: 1},
              // { desc: '', ratename: 'marginal', score: 2},
              // { desc: '', ratename: 'satisfactory', score: 3},
              { desc: 'asked patient if potentially pregnant', ratename: 'outstanding', score: 4}]
  },// Eval 4
  // Category: Patient Care
  {
    eval: 5,
    cat: 'Patient Care',
    subcat: 'PATIENT ID',
    rating: [
              {desc: 'Did not verify patient\'s ID bracelet and D.O.B. before beginning exam', ratename: 'unsatisfactory', score: 1}, // Uses character escape instead of double quotes.
              {desc: 'Patient was insufficiently identified by checking an alternate form of ID.', ratename: 'marginal', score: 2},
              {desc: 'Properly confirmed patient ID, but did not verify matching information to the examination screen', ratename: 'satisfactory', score: 3},
              {desc: 'Used all appropriate methods of identification without proctoring', ratename: 'outstanding', score: 4}]
  },// Eval 5
  {
    eval: 6,
    cat: 'Patient Care',
    subcat:'COMMUNICATION',
    rating: [
              {desc: 'Did not introduce themselves and referred to the patient in an unprofessional manner or visibly impatient during patient interactions', ratename: 'unsatisfactory', score: 1},
              {desc: 'Did not introduce themselves and provided poor explanation of the procedure',ratename: 'marginal', score: 2},
              {desc: 'Introduced themselves and provided a correct explanation of the procedure',ratename: 'satisfactory', score: 3},
              {desc: 'Introduced themselves and explained the procedure correctly in a manor in which could be fully understood by the patient',ratename: 'outstanding', score: 4}]
  },// Eval 6
  // Category: Positioning
  {
    eval: 7,
    cat: 'Positioning',
    subcat: 'POSITIONING',
    rating: [
              {desc: 'repeat required, or makes more than two positioning errors', ratename: 'unsatisfactory', score: 1},
              {desc: 'Anatomy centered, but may be improperly rotated or improper SID or OID', ratename: 'marginal', score: 2},
              {desc: 'Acceptable positioning with little to no proctoring', ratename: 'satisfactory', score: 3},
              {desc: 'Textbook quality positioning without any errors or proctoring', ratename: 'outstanding', score: 4}]
  },// Eval 7
  {
    eval: 8,
    cat: 'Positioning',
    subcat: 'LOGICAL THINKING',
    rating: [
            {desc: 'Unaware of positioning protocol, and no logical order in which exams were performed', ratename: 'unsatisfactory', score: 1},
            {desc: 'Moved and repositioned patient unnecessarily numerous times', ratename: 'marginal', score: 2},
            {desc: 'Logical approach used to sequentially order multiple views', ratename: 'satisfactory', score: 3},
            {desc: 'Optimal use of logical approach to complete the study without unnecessary repositioning', ratename: 'outstanding', score: 4}]
  },// Eval 8
  // Category: Student Image Evaluation Skills
  {
    eval: 9,
    cat: 'Image Evaluation',
    subcat: 'IMAGE EVALUATION',
    rating: [
              {desc: 'Unable to assess for proper textbook quality', ratename: 'unsatisfactory', score: 1},
              {desc: 'Sometimes able to assess images for positioning quality, but requires proctoring', ratename: 'marginal', score: 2},
              {desc: 'Usually able to assess images for textbook quality with little or no proctoring',ratename: 'satisfactory', score: 3},
              {desc: 'Able to identify all anatomic parts correctly and demonstrates full understanding of how to determine the appropriate position was achieved',ratename: 'outstanding', score: 4}]
  },// Eval 9
  {
    eval: 10,
    cat: 'Image Evaluation',
    subcat: 'IMAGE EVALUATION',
    rating: [
              {desc: 'Unable to identify anatomic structures and/or if anatomy was positioned properly', ratename: 'unsatisfactory', score: 1},
              {desc: 'Can identify some of the anatomy with some understanding of how an appropriate is achieved', ratename: 'marginal', score: 2},
              {desc: 'Able to identify most anatomical structures and demonstrates an understanding of the positioned part', ratename: 'satisfactory', score: 3},
              {desc: 'Correctly identifies all anatomical regions with full understanding how how the positioning relates to the image achieved', ratename: 'outstanding', score: 4}]
  },// Eval 10
  // Radiographer / CI / CC Image evaluation
  {
    eval: 11,
    cat: 'Image evaluation',
    subcat: 'MARKERS',
    rating: [ {desc: 'No marker place upon the image receptor during time of exposure',ratename: 'unsatisfactory', score: 1},
              {desc: 'The marker was placed, but was collimated off, or the marker obscures the desired anatomy',ratename: 'marginal', score: 2},
              {desc: 'The marker is vaguely visible due to partial collimation',ratename: 'satisfactory', score: 3},
              {desc: 'Properly placed and well visualized marker that does not obscure the desired anatomy', ratename: 'outstanding', score: 4}]
  },// Eval 11
  {
    eval: 12,
    cat: 'Image evaluation',
    subcat: 'CORRECTIVE ACTION',
    rating: [ {desc: 'No concept of how to make corrections to properly perform the exam', ratename: 'unsatisfactory', score: 1},
              {desc: 'Proctoring is required to ensure proper corrective action', ratename: 'marginal', score: 2},
              {desc: 'Some direction needed, but overall proficient in corrective action', ratename: 'satisfactory', score: 3},
              {desc: 'Determined a logical solution and preformed corrective action without proctoring', ratename: 'outstanding', score: 4}]
  },// Eval 12

function() {
      console.log('finished populating Grades Evaluation comments for buttons');
    }
  );
});
// Clear old users, then add a default user


// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     role: 'admin',
//     name: 'Admin',
//     email: 'admin@admin.com',
//     password: 'admin'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });
