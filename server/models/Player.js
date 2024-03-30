const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    nickname: {
        type: String,
        trim: true
    },
    socketID: {
        type: String
    },
    isPartLeader: {
        type: Boolean,
        default: false
    },
    points: {
        type: Number,
        default: 0
    },
})

const playerModel = mongoose.model('Player', playerSchema);
module.exports = {playerModel, playerSchema}