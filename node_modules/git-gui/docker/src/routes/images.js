var express = require('express');
var controller = express.Router();
var service = require('../services/docker.js');

controller.get('/', (req, res) => {
    service.getImages().then(images => {
        res.json(images);
    })
});



module.exports = controller;
