const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dessertSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const exportUser = mongoose.model('desserts', dessertSchema);

module.exports = exportUser;
