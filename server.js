const express = require('express');
const mongoose = require('mongoose');
const catRoutes = require('./routes/cats');
const dogRoutes = require('./routes/dogs');
const birdRoutes = require('./routes/birds');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const mongoURi = process.env.MONGODB_URI;
mongoose.connect(mongoURi, { useNewUrlParser: true, useUnifiedTopology: true });



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use('/cats', catRoutes);
app.use('/dogs', dogRoutes);
app.use('/birds', birdRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


