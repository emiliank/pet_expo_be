const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
 name: String,
 origin: String,
 temperament: String,
 colors: Array,
 description: String,
 image: String
});
module.exports = mongoose.model('Cat', catSchema);