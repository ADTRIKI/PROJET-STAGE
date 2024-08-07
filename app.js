const express = require('express');
const app = express();
const port = 3000;

// Servir les fichiers statiques du dossier "public"
app.use(express.static('public'));

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
oood