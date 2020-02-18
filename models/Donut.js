// import { Schema } from "mongoose";

// requirements: require db/connection as 'mongoose'
const mongoose = require('db/connection');
const Schema = mongoose.Schema;

// create your donut schema:
const Donut = new Schema({
// Schema fields here
// name, description, img, price, qty
name: String,
description: String,
img: String,
price: Number,
qty: Number
});

// export the donut model with module.exports
module.exports = mongoose.model('Donut', Donut);