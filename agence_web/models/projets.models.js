const mongoose = require('mongoose');

const ProjetSchema = mongoose.Schema({
    //_id: Schema.Types.ObjectId,
    name: String,
	description: String,
    datedebut: String,
    datefin: String,
    client: String,
    //client: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
    salaries: String,
    montant: String,
    statut: String

    }, {
    timestamps: true
});

module.exports = mongoose.model('Projet', ProjetSchema);