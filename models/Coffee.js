// import { Schema } from "mongoose";

// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

// create your donut schema:
const Coffee = new Schema({
// Schema fields here
// TODO make name & description required
name: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
img: String,
price: Number,
cups: Number
});

// export the Coffee model with module.exports
module.exports = mongoose.model('Coffee', Coffee);