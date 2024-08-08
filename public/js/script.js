class Team {
    constructor(name) {
        this.name = name;
        this.players = {};
    }

    addPlayer(position, name) {
        if (Object.keys(this.players).length >= 5) {
            alert(`L'équipe ${this.name} ne peut pas avoir plus de 5 joueurs.`);
            return false;
        }
        this.players[position] = name;
        return true;
    }

    removePlayer(position) {
        delete this.players[position];
    }
}

const blueTeam = new Team('Bleue');
const redTeam = new Team('Rouge');

document.getElementById('addPlayerButton').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const position = document.getElementById('position').value;
    const team = document.getElementById('team').value;

    if (!firstName || !lastName || !position) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    const playerInfo = `${firstName} ${lastName}`;

    let teamObj;
    let teamList;
    if (team === 'blue') {
        teamObj = blueTeam;
        teamList = document.getElementById('blueTeamList');
    } else if (team === 'red') {
        teamObj = redTeam;
        teamList = document.getElementById('redTeamList');
    }

    if (teamObj.addPlayer(position, playerInfo)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${playerInfo} (${position})`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', function() {
            teamList.removeChild(listItem);
            teamObj.removePlayer(position);
            removePlayerFromField(team, position);
        });
        listItem.appendChild(removeButton);
        teamList.appendChild(listItem);
        addPlayerToField(team, position, playerInfo);
    }

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('position').value = '';
});

function addPlayerToField(team, position, playerInfo) {
    const playerDiv = document.getElementById(`${team}${position}`);
    playerDiv.textContent = playerInfo.charAt(0); // Show first letter of player's name
    playerDiv.style.display = 'flex';
}

function removePlayerFromField(team, position) {
    const playerDiv = document.getElementById(`${team}${position}`);
    playerDiv.style.display = 'none';
}
