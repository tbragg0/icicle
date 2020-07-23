const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  title: String,
  class: String,
  done: Boolean,
});

const Assignment = mongoose.model('Assignment', AssignmentSchema);

module.exports = Assignment;