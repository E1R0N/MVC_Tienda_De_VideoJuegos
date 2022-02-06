const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const gameSchema = new Schema({
    name : {
        type : String,
    },
    game : {
        type : String,
    },
    state :{
        type : String,
    },
    initDate: {
        type: Date,
    },
    fDate: {
        type : Date,
    },
    returnDate: {
        type : Date,
    },
    debt: {
        type : Number,
    }
});

//Exportar modelo
const Game = mongoose.model('Game', gameSchema);
export default Game;