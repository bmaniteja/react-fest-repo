const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});


admin.initializeApp();

exports.getPetsList = functions.https.onRequest((req, res) => {
  cors(req, res, () => {});
  const petType = req.query.type;
  return admin.database().ref(`/pets/${petType}`).once('value', snapshot => {
    res.json(snapshot.val());
  }, error => {

  });
});

exports.getPetDetails = functions.https.onRequest((req, res) => {
  cors(req, res, () => {});
  const petType = req.query.type;
  const petId = req.query.id;
  return admin.database().ref(`/pets/${petType}/${petId}`).once('value', snapshot => {
    res.json(snapshot.val());
  }, error => {

  });
});
