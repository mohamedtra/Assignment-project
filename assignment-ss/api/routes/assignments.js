let Assignment = require('../model/assignment');

const multer = require('multer')

var DIR = './uploads/';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage }).single('avatar')

// Récupérer tous les assignments (GET)
function getAssignments(req, res) {
    Assignment.find((err, assignments) => {
        if (err) {
            res.send(err)
        }

        res.send(assignments);
    });
}

// Récupérer un assignment par son id (GET)
function getAssignment(req, res) {
    let assignmentId = req.params.id;
    Assignment.findOne({ id: assignmentId }, (err, assignment) => {
        if (err) { res.send(err) }
        res.json(assignment);
    })
}

// Ajout d'un assignment (POST)
function postAssignment(req, res) {
    console.log("Request File", req.files);
    //console.log("Request File", req.file);
    var path = '';
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.status(422).send("an Error occured")
        }

    })

    console.log("reeq " , req.body);
    let assignment = new Assignment();
    assignment.id = req.body.id;
    assignment.titre = req.body.titre;
    assignment.auteur = req.body.auteur;
    assignment.dateDeRendu = req.body.dateDeRendu;
    assignment.matiere = req.body.matiere;
    assignment.note = req.body.note;
    assignment.remarque = req.body.remarque;
    assignment.avatar = req.body.avatar;
    assignment.rendu = req.body.rendu;


    console.log("POST assignment reçu :");
    console.log(assignment)


    assignment.save((err) => {
        if (err) {
            res.send('cant post assignment ', err);
        }
        res.json({ message: `${assignment.titre} saved!` })
    })
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);
    Assignment.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json({ message: 'updated' })
        }

        // console.log('updated ', assignment)
    });

}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res) {

    Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: `${assignment.titre} deleted` });
    })
}



module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment };
