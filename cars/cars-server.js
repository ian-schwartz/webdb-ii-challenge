const express = require('express');
const db = require('../data/dbConfig');

const server = express();

server.use(express.json());

server.get('/cars', (req, res) => {
    db('cars')
      .then(cars => res.status(200).json(cars))
      .catch(() => res.status(500).json({ error: 'Failed to retrieve the cars' }));
});

server.post('/cars', (req, res) => {
    db('cars')
      .insert(req.body)
      .then(car => res.status(201).json(car))
      .catch(() => res.status(500).json({ error: 'Failed to add the car' }));
});

module.exports = server;