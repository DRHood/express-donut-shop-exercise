const express = require('express');
const coffeeRouter = express.Router();

const Coffees = require('../models/Coffee');

Coffees.find().then(coffees => {
    
})