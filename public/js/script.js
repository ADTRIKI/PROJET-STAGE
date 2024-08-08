const positions = [
    'gk', 'cb', 'lb', 'rb', 'lwb', 'dm', 'rwb', 
    'lm', 'cm', 'rm', 'amr', 'am', 'aml', 
    'wl', 'cf', 'wr', 'st'
];

function addPlayer() {
    const playerName = document.getElementById('namePlayer').value.trim();
    if (playerName === "") {
        alert("Please enter a player name.");
        return;
    }
    
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    const playerElement = document.createElement('div');
    playerElement.className = randomPosition;
    playerElement.textContent = playerName;
    
    const fieldPosition = document.querySelector(`.${randomPosition}`);
    fieldPosition.appendChild(playerElement);
    
    const playerList = document.getElementById('player-list');
    const playerListItem = document.createElement('div');
    playerListItem.textContent = `${playerName} - ${randomPosition.toUpperCase()}`;
    playerList.appendChild(playerListItem);
    
    document.getElementById('namePlayer').value = "";
}
