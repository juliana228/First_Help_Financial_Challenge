const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const dotenv = require('dotenv').config();

const MONGO_URI =
  'mongodb+srv://julianamorrelli28:Peted2288!@cluster0.vluz2oc.mongodb.net/?retryWrites=true&w=majority';

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
