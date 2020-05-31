const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const Students = new Schema({

    name : 'string',
    lastName: 'string'

    })

module.exports = mongoose.model('students', Students)

