const Projet = require ('../models/projets.models.js');

// créer et sauvegarder un nouveau projet
exports.create = (req, res) => {
    //validation request
    if(!req.body.name){
      return res.status(400).send({
        message: "projet content can not be empty"
      });
    };

    //create a projet
    const projet = new Projet({
      name: req.body.name,
      description: req.body.description,
      datedebut: req.body.datedebut,
      datefin: req.body.datefin,
      client: req.body.client,
      salaries: req.body.salaries,
      montant: req.body.montant,
      statut: req.body.statut
    });

    //sauvegarder projet in the database, propre à Mongoose pour save dans la BDD
    projet.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occurred while creating the projet."
      });
    });
};

// récupérer l'ensemble des utilisateurs en BDD'
exports.findAll = (req, res) => {
  //Projet.find(populate('client', 'name'))
  Projet.find()
      .then(projets => {
        res.send(projets);
      }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occurred while retrieving projets."
      });
      });
};

// récupérer un utilisateur en BDD'
exports.findOne = (req, res) => {
  Projet.findById(req.params.id)
    .then(projet => {
        if(!projet) {
            return res.status(404).send({
            message: "projet not found with id " + req.params.id
            });
        }
    res.send(projet);  
    }).catch(err => {
        if(err.kind === 'ObjectId') {
        return res.status(404).send({
        message: "projet not found with id " + req.params.id
        });
        }
        return res.status(500).send({
         message: "Error retrieving projet with id " + req.params.id
        });
    });
};

// modifier un utilisateur en BDD'
exports.update = (req, res) => {

  Projet.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        datedebut: req.body.datedebut,
        datefin: req.body.datefin,
        client: req.body.client,
        salaries: req.body.salaries,
        montant: req.body.montant,
        statut: req.body.statut
    }, { new : true })
  
    .then(projet => {
    if(!projet) {
        return res.status(404).send({
            message: "projet not found with id " + req.params.id
        });
    }
    res.send(projet);
    }).catch(err => {
    if(err.kind === 'id') {
        return res.status(404).send({
            message: "projet not found with id " + req.params.id
        });
    }
    return res.status(500).send({
        message: "Error updating projetwith id " + req.params.id
    });
    });

};

// supprimer un projet en BDD'
exports.delete = (req, res) => {
  Projet.findByIdAndRemove(req.params.id)
    .then(projet => {
      res.send(projet);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occurred while retrieving projets."
    });
    });

    //rajouter popup à la suppression
    alert("projet supprimé.");
};
