const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 6
    },
    keywords: {
        type: String,
        required: true
    },
    bidAmount: {
        type: Number, 
        required: true,
        minimum: 200
    },
    campaignFound: {
        type: Number
    },
    status: {
        type: Boolean,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    radius: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Campaign', CampaignSchema);