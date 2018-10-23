//Route pour les projets
module.exports = (app) => {
    const projet = require ('../controllers/projets.controller.js');
  
    // créer un projet
    app.post('/projets', projet.create);
  
    // lire plusieurs projets
    app.get('/projets', projet.findAll);
  
    //lire un projet
    app.get('/projets/:id', projet.findOne);
  
    //modifier plusieurs projets
    app.put('/projets/:id', projet.update);

    // supprimer plusieurs projets
    app.delete('/projets/:id', projet.delete);
}