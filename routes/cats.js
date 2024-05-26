const express = require('express');
const router = express.Router();
const Cat = require('../models/Cat');  

// Create a new cat
router.post('/', async (req, res) => {
  const cat = new Cat(req.body);
  try {
    await cat.save();
    res.status(201).send(cat);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Search cat by name
router.get('/search', async (req, res) => {
  const { name } = req.query;
  try {
    const regex = new RegExp(name, 'i'); 
    const cats = await Cat.find({ name: { $regex: regex } });
    if (cats.length === 0) {
      return res.status(404).json({ message: 'No cats found' });
    }
    res.json(cats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Read all cats
router.get('/', async (req, res) => {
  try {
    const cats = await Cat.find();
    res.status(200).send(cats);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a single cat by ID
router.get('/:id', async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id);
    if (!cat) {
      return res.status(404).send();
    }
    res.status(200).send(cat);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a cat by ID
router.patch('/:id', async (req, res) => {
  try {
    const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cat) {
      return res.status(404).send();
    }
    res.status(200).send(cat);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a cat by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCat = await Cat.findByIdAndDelete(req.params.id);
    if (!deletedCat) {
      return res.status(404).json({ message: 'Cat not found' });
    }
    res.status(200).json({ message: 'Cat deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
