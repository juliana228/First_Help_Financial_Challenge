const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const dotenv = require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI_LINK;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'FirstHelpChallenge',
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const showSchema = new Schema({
  artist: { type: String, required: true },
  tourName: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
});

const Shows = mongoose.model('Shows', showSchema);

module.exports = { Shows };
