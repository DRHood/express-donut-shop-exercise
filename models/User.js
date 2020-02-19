const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const CartItem = require('CartItem');

const User = new Schema({
    username:{
        type: String,
        required: true,
    },
    shoppingCart: [CartItem],
});

module.exports = mongoose.model('User', User);