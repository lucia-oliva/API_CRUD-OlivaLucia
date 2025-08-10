const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  fecha: { type: Date, required: true },
  lugar: { type: String },
  participantes: [{
    nombre: { type: String},
    email:  { type: String}
  }],
  capacidadMaxima: { type: Number },
  entradasDisponibles: { type: Number }
});

module.exports = mongoose.model('Evento', eventoSchema);