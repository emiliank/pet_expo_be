const express = require('express');
const router = express.Router();
const Bird = require('../models/Bird');  

// Create a new bird
router.post('/', async (req, res) => {
  const bird = new Bird(req.body);
  try {
    await bird.save();
    res.status(201).send(bird);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Search bird by name
router.get('/search', async (req, res) => {
  const { name } = req.query;
  try {
    const regex = new RegExp(name, 'i');  
    const birds = await Bird.find({ name: { $regex: regex } });
    if (birds.length === 0) {
      return res.status(404).json({ message: 'No birds found' });
    }
    res.json(birds);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Read all birds
router.get('/', async (req, res) => {
  try {
    const birds = await Bird.find();
    res.status(200).send(birds);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a single bird by ID
router.get('/:id', async (req, res) => {
  try {
    const bird = await Bird.findById(req.params.id);
    if (!bird) {
      return res.status(404).send();
    }
    res.status(200).send(bird);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a bird by ID
router.patch('/:id', async (req, res) => {
  try {
    const bird = await Bird.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!bird) {
      return res.status(404).send();
    }
    res.status(200).send(bird);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a bird by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBird = await Bird.findByIdAndDelete(req.params.id);
    if (!deletedBird) {
      return res.status(404).json({ message: 'Bird not found' });
    }
    res.status(200).json({ message: 'Bird deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
