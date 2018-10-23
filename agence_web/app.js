const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

// définir une simple route
app.use(function(req, res, next) {
    res.setHeader('Content-type','application/json');
    res.setHeader('Accept','application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
    next();
});

mongoose.Promise = global.Promise;

//connection à la base de donnée
mongoose.connect('mongodb://julie:pereira11@ds221003.mlab.com:21003/node', {
		useNewUrlParser : true
        }).then(() => {
	          console.log("successfully connected to the database")
        }).catch(err => {
	          console.log('could not connect to the database. exiting now...', err);
	  process.exit();
});

//imports des routes
require('./routes/clients.route.js')(app);
require('./routes/projets.route.js')(app);
require('./routes/salaries.route.js')(app);


app.listen(3000, function () {
  console.log('Server is listening on port 3000!');
});