const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: String,
    adress : 
        {street: String,
        zipcode: String,
        city: String},
    contact: 
        {name2: String,
        prenom: String,
        phone: String,
    mail: String},
    secteur: String
    }, {
    timestamps: true
});

module.exports = mongoose.model('Client', ClientSchema);