const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roomNumber: { type: String, required: true },
  department: { type: String, required: true },
  year: { type: Number, required: true },
  phone: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
