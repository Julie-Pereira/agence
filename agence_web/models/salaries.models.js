const mongoose = require('mongoose');

const SalarieSchema = mongoose.Schema({
    name: String,
    prenom: String,
	username: String,
    birthday: String,
    adress : 
        {street: String,
        city: String,
        zipcode: String},
    tel: String,
    mail: String,
    poste : String 

    }, {
    timestamps: true
});

module.exports = mongoose.model('Salarie', SalarieSchema);