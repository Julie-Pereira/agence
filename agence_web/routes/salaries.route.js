//Route pour les clients
module.exports = (app) => {
    const salarie = require ('../controllers/salaries.controller.js');
  
    // créer un projet
    app.post('/salaries', salarie.create);
  
    // visualiser plusieurs clients
    app.get('/salaries', salarie.findAll);
  
    //visualiser un client
    app.get('/salaries/:id', salarie.findOne);
  
    //modifier un client
    app.put('/salaries/:id', salarie.update);

    // supprimer un client
    app.delete('/salaries/:id', salarie.delete);

  
   }