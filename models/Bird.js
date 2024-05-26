const mongoose = require('mongoose');
const birdSchema = new mongoose.Schema({
    id: Number,
    name: String,
    species: String,
    family:  String,
    habitat: String,
    place_of_found: String,
    diet: String,
    description: String,
    weight_kg: Number,
    height_cm: Number,
    image: String
});
module.exports = mongoose.model('Bird', birdSchema);