let express = require('express');
//let multer = require('multer');
let app = express();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');
global.__root   = __dirname + '/'; 

let verifyToken = require('./auth/VerifyToken');





let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);




// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri = 'mongodb+srv://mtraore:voI4JfizrYdSEZRE@clusterassigments.d1nao.mongodb.net/assignments?retryWrites=true&w=majority';


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

//const uploads = multer({dest:'./public/uploads'});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

app.route(prefix + '/assignments')
  .get(verifyToken, assignment.getAssignments);

app.route(prefix + '/assignments/:id')
  .get(assignment.getAssignment)
  .delete(assignment.deleteAssignment);

  app.route(prefix + '/assignments')
  .post(assignment.postAssignment)
  .put(assignment.updateAssignment);
//app.post(prefix + '/assignments',uploads.single('matiere'), assignment.postAssignment)
  // .put(assignment.updateAssignment);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);


var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;


