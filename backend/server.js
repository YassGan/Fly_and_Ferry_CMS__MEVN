const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');


const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


const footer_API = require('./APIs/footer_API.js');
app.use('/api/footer_API', footer_API);



// Connexion à MongoDB 
  const mongoose = require('mongoose');
  mongoose
    .connect("mongodb+srv://yassineganayt:yassineganayt@cluster0.elldbwh.mongodb.net/InventaireDB?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB Connecté ');
    })
    .catch((error) => {
      console.error('Erreur de connexion à MongoDB en local :', error);
    });
// !!Connexion à MongoDB 




// Déclencheur du serveur backend
const PORT=3000
app.listen(PORT, () => {
  console.log("Le serveur écoute sur le port "+PORT);
});
// !!Déclencheur du serveur backend

