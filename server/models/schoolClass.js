const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchoolClass = new Schema({
  title: String,
  users: Array,
  assignments: Array,
});

const ClassModel = mongoose.model('SchoolClass', SchoolClass);

module.exports = ClassModel;