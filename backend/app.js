const express = require('express'); /*** importer l'express ***/
const bodyParser = require('body-parser'); /*** importer le bodyParser ***/
const path = require("path");
const mysql = require('mysql2');




const app = express(); /*** appeler express pour créer notre application express ***/


/*** Middleware général/ configurer des Headers sur l'objet réponse pour eviter les erreurs du CORS (Cross Origin Resource Sharing)
    et assurer que le front-end pourra effectuer des appels vers l'application en toute sécurité.  ***/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); /*** d'accéder à notre API depuis n'importe quelle origine ***/
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); /*** d'ajouter les headers mentionnés aux requêtes envoyées vers notre API ***/
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); /*** d'envoyer des requêtes avec les méthodes mentionnées  ***/
    next();
});

/*** importer les routes à notre application ***/
/*** importer la route user ***/
const userRoutes = require('./routes/user');
/*** importer la route post ***/
const postRoutes = require('./routes/post');
/*** importer la route user ***/
const commentRoutes = require('./routes/comment');



/*** transformation du corps de la requête en objet Javascript utilisable ***/
app.use(bodyParser.json());

/*** création d'un middleware pour indiquer à Express qu'il faut gérer la ressource images de manière statique 
(un sous-répertoire de notre répertoire de base, __dirname:nom du dossier ) à chaque fois qu'elle reçoit une requête vers la route /images ***/
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
/*** les routes attendues par le frontend ***/

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

/*** exporter notre application pour qu'on puisse y accéder dans les autres fichiers de notre projet ***/
module.exports = app;