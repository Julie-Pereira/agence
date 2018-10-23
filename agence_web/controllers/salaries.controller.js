const Salarie = require ('../models/salaries.models.js');

// create and save a new salarie
exports.create = (req, res) => {
    //validation request
    if(!req.body.name){
      return res.status(400).send({
        message: "salaries not be empty"
      });
    };

    //creation d'un salarié
    const salarie = new Salarie({
      name: req.body.name,
      prenom : req.body.prenom,
      username: req.body.username,
      birthday: req.body.birthday,
      adress : {street: req.body.adress.street,
      city: req.body.adress.city,
      zipcode: req.body.adress.zipcode},
      tel: req.body.tel,
      mail: req.body.mail,
      poste: req.body.poste,
    });

    //save salarie in the database, propre à Mongoose pour save dans la BDD
    salarie.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occurred while creating the salarie."
      });
    });
};

// récupérer l'ensemble des utilisateurs en BDD'
exports.findAll = (req, res) => {
  Salarie.find()
      .then(salaries => {
        res.send(salaries);
      }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occurred while retrieving salaries."
      });
      });
    };

// récupérer un utilisateur en BDD'
exports.findOne = (req, res) => {
  Salarie.findById(req.params.id)
  .then(salarie => {
     if(!salarie) {
         return res.status(404).send({
            message: "salarie not found with id " + req.params.id
         });
      }
     res.send(salarie);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
         return res.status(404).send({
            message: "salarie not found with id " + req.params.id
         });
    }
    return res.status(500).send({
      message: "Error retrieving salarie with id " + req.params.id
    });
  });
};

// modifier un utilisateur en BDD'
exports.update = (req, res) => {

  Salarie.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    prenom : req.body.prenom,
    username: req.body.username,
    birthday: req.body.birthday,
    adress : {street: req.body.adress.street,
      city: req.body.adress.city,
      zipcode: req.body.adress.zipcode},
    tel: req.body.tel,
    mail: req.body.mail,
    poste: req.body.poste,
  }, { new : true })

	.then(salarie=> {
    if (!salarie){
      return res.status(404).send({
      message : "salarie not found with id" + req.params.id
      });
    }
    res.send(salarie);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occurred while retrieving salaries."
    });
});

};

// supprimer un utilisateur en BDD'
exports.delete = (req, res) => {
  Salarie.findByIdAndRemove(req.params.id)
    .then(salarie => {
        res.send(salarie);
    }).catch(err => {
    res.status(500).send({
    message: err.message || "some error occurred while retrieving salaries."
    });
    });
};