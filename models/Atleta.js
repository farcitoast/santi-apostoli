const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AtletaSchema = new Schema({
  nome:{
    type: String,
    required: true
  },
  cognome:{
    type: String,
    required: true
  },
  dataNascita: {
    type: Date,
    required: true
  },
  scadCertificato: {
    type: Date,
    default: null
  },
  numTesseramento: {
    type: Number,
    required: true
  },
  soldi: {
    type: Number
  },
  squadra: {
    type: String,
    required: true
  }
});

mongoose.model('athlete', AtletaSchema);