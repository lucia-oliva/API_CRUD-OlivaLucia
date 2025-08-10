const express = require('express');
const router = express.Router();
const Evento = require('../models/eventosmodel');

router.post('/eventos/:id/registrar', async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) {
      return res.status(404).send({ mensaje: 'Evento no encontrado' });
    }
    if (!evento.entradasDisponibles || evento.entradasDisponibles <= 0) {
      return res.status(400).send({ mensaje: 'No hay entradas disponibles' });
    }
    const { nombre, email } = req.body;
    evento.participantes.push({ nombre, email }); 
    evento.entradasDisponibles -= 1;
    const guardado = await evento.save();
    res.status(200).send(guardado);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/eventos/disponibles', async (req, res) => {
  try {
    const eventos = await Evento.find({ entradasDisponibles: { $gt: 0 } });
    if (eventos.length === 0) {
      return res.status(200).send({ mensaje: 'No hay eventos disponibles' });
    }
    res.status(200).send({
      mensaje: 'Hay eventos disponibles',
      eventos
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get('/eventos/fecha/:fecha', async (req, res) => {
  try {
    const inicio = new Date(`${req.params.fecha}T00:00:00.000Z`);
    const fin = new Date(`${req.params.fecha}T23:59:59.999Z`);
    const eventos = await Evento.find({ fecha:{$gte:inicio,$lte:fin}});
    res.status(200).send(eventos);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
