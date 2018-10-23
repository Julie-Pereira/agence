const Client = require ('../models/clients.models.js');

// create and save a new client
exports.create = (req, res) => {
    //validation request
    if(!req.body.name){
      return res.status(400).send({
        message: "user content can not be empty"
      });
    };

    //create a user
    const client = new Client({
      name: req.body.name,
      adress : {street: req.body.adress.street,
        city: req.body.adress.city,
        zipcode: req.body.adress.zipcode},
      contact : {name2: req.body.contact.name2,
        prenom: req.body.contact.prenom,
        phone: req.body.contact.phone,
        mail: req.body.contact.mail},
      secteur: req.body.secteur,
    });

    //save user in the database, propre à Mongoose pour save dans la BDD
    client.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occurred while creating the client."
      });
    });
};

// récupérer l'ensemble des utilisateurs en BDD'
exports.findAll = (req, res) => {
  Client.find()
    .then(clients => {

      res.send(clients);
    }).catch(err => {

      res.status(500).send({
        message: err.message || "some error occurred while retrieving clients."
      });
    });
};

// récupérer un utilisateur en BDD'
exports.findOne = (req, res) => {
  Client.findById(req.params.id)
  .then(client => {
    if(!client) {
      return res.status(404).send({
        message: "client not found with id " + req.params.id
      });
    } 
  res.send(client);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "client not found with id " + req.params.id
      });
    }
      return res.status(500).send({
        message: "Error retrieving client with id " + req.params.id
      });
  });
};

// modifier un utilisateur en BDD'
exports.update = (req, res) => {

  Client.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
      adress : {street: req.body.adress.street,
        city: req.body.adress.city,
        zipcode: req.body.adress.zipcode},
      contact : {name2: req.body.contact.name2,
        prenom: req.body.contact.prenom,
        phone: req.body.contact.phone,
        mail: req.body.contact.mail},
      secteur: req.body.secteur,
  }, { new : true })
	.then(client=> {
			if (!client){
				return res.status(404).send({
				message : "client not found with id" + req.params.id
				});
	    }
      res.send(client);
  }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occurred while retrieving clients."
      });
  });
};

// supprimer un utilisateur en BDD'
exports.delete = (req, res) => {
  Client.findByIdAndRemove(req.params.id)
    .then(client => {
      res.send(client);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occurred while retrieving clients."
    });
  });
};
