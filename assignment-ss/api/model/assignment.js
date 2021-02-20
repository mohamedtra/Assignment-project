let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    titre:String,
    auteur: String,
    note: String,
    remarques: String,
    dateDeRendu: Date,
    matiere: String,
    avatar: String,
    rendu: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
