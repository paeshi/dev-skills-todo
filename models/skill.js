const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    uid: String,
    skill: {
        type: String, 
        required: true},
    level: {
        type: String, 
        required: true},
    }, {
    timestamps: true,
});


module.exports = mongoose.model('Skill', skillSchema)