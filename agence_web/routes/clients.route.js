//Route pour les clients
module.exports = (app) => {
    const client = require ('../controllers/clients.controller.js');
  
    // creer un client
    app.post('/clients', client.create);
  
    // visualiser plusieurs clients
    app.get('/clients', client.findAll);
  
    //visualiser un client
    app.get('/clients/:id', client.findOne);
  
    //modifier un client
    app.put('/clients/:id', client.update);

    // supprimer un client
    app.delete('/clients/:id', client.delete);

  
}