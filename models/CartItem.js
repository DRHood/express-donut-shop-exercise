const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const CartItem = new Schema({
    donut: {
        type: Schema.Types.ObjectId,
        ref: 'donut'
    }
})