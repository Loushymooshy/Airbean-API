// models/Campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Campaign', campaignSchema);
