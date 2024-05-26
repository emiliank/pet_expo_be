const express = require('express');
const router = express.Router();
const Dog = require('../models/Dog'); 

// Create a new dog
router.post('/', async (req, res) => {
  const dog = new Dog(req.body);
  try {
    await dog.save();
    res.status(201).send(dog);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Search dog by name
router.get('/search', async (req, res) => {
  const { name } = req.query;
  try {
    const regex = new RegExp(name, 'i'); 
    const dogs = await Dog.find({ name: { $regex: regex } });
    if (dogs.length === 0) {
      return res.status(404).json({ message: 'No dogs found' });
    }
    res.json(dogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Read all dogs
router.get('/', async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.status(200).send(dogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a single dog by ID
router.get('/:id', async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) {
      return res.status(404).send();
    }
    res.status(200).send(dog);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a dog by ID
router.patch('/:id', async (req, res) => {
  try {
    const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dog) {
      return res.status(404).send();
    }
    res.status(200).send(dog);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a dog by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDog = await Dog.findByIdAndDelete(req.params.id);
    if (!deletedDog) {
      return res.status(404).json({ message: 'Dog not found' });
    }
    res.status(200).json({ message: 'Dog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
