const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  personName: {
    type: String,
    required: true,
    unique: false
  },
  personBirthDate: {
    type: Date,
    required: true
  },
  personEmail: {
    type: String,
    required: true,
    maxLength: 100,
    unique: true
  },
  personPhone: {
    type: String,
    minLength: 11,
    maxLength: 11
  },
  passportNumber: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  passportIssueDate: {
    type: Date,
    required: true
  },
  passportIssuer: {
    type: String,
    required: true
  },
  passportIssuerNumber: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 6
  },
  drivingLicence: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  drivingLicenceIssueDate: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  }

});

const User = mongoose.model('User', userSchema);
module.exports = User;
