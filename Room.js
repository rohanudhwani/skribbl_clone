const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    occupancy: {
        type: Number,
        required: true,
        default: 4
    },
    maxRounds: {
        type: Number,
        required: true,
    },
    currentRound: {
        type: Number,
        required: true,
        default: 1
    },
    players: [playerSchema],
    isJoin: {
        type: Boolean,
        default: false
    },
    turn: playerSchema,
    turnIndex: {
        type: Number,
        default: 0
    },
})