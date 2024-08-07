const positions = [
    { top: "10%", left: "5%" },
    { top: "10%", left: "15%" },
    { top: "10%", left: "25%" },
    { top: "10%", left: "35%" },
    { top: "10%", left: "45%" },
    { top: "10%", left: "55%" },
    { top: "10%", left: "65%" },
    { top: "10%", left: "75%" },
    { top: "10%", left: "85%" },
    { top: "30%", left: "15%" },
    { top: "30%", left: "5%" }
];

let joueurs = [];
let joueurSelectionneIndex = null;

function chargerJoueurs() {
    fetch('joueurs.json')
        .then(response => response.json())
        .then(data => {
            console.log("Joueurs chargés :", data); // Ajout de log
            joueurs = data;
            afficherJoueurs(joueurs);
        })
        .catch(error => console.error("Erreur de chargement des joueurs :", error)); // Ajout de log en cas d'erreur
}

function afficherJoueurs(joueurs) {
    const terrain = document.getElementById('terrain');
    if (!terrain) {
        console.error("Élément terrain non trouvé !");
        return;
    }

    joueurs.forEach((joueur, index) => {
        // Afficher les joueurs sur le terrain
        const joueurDiv = document.createElement('div');
        joueurDiv.className = 'joueur';
        joueurDiv.style.top = positions[index].top;
        joueurDiv.style.left = positions[index].left;
        joueurDiv.innerHTML = `
            <img src="${joueur.photo}" id="photo-${index}" alt="${joueur.name}">
        `;
        joueurDiv.addEventListener('click', () => editerJoueur(index));
        terrain.appendChild(joueurDiv);
    });
}

function editerJoueur(index) {
    joueurSelectionneIndex = index;
    const inputElement = document.getElementById('nom-joueur');
    inputElement.value = joueurs[index].name;
    inputElement.focus();
}

function mettreAJourNomJoueur() {
    if (joueurSelectionneIndex !== null) {
        const newName = document.getElementById('nom-joueur').value;

        const photoElement = document.getElementById(`photo-${joueurSelectionneIndex}`);
        joueurs[joueurSelectionneIndex].name = newName;
        photoElement.src = `images/${newName.toLowerCase().replace(' ', '-')}.png`;
    }
}

document.addEventListener("DOMContentLoaded", chargerJoueurs);