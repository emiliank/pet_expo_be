const mongoose = require('mongoose');
const dogSchema = new mongoose.Schema({
 name: String,
 breed_group: String,
 size: String,
 lifespan: String,
 origin: String,
 temperament: String,
 colors: Array,
 description: String,
 image: String
});
module.exports = mongoose.model('Dog', dogSchema);