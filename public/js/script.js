document.addEventListener('DOMContentLoaded', function() {
    fetch('players.json')
        .then(response => response.json())
        .then(data => updateField(data))
        .catch(error => console.error('Error loading JSON data:', error));
});

let selectedPlayerIndex = null;

function updateField(players) {
    players.forEach((player, index) => {
        const div = document.querySelector(`.${player.position}`);
        if (div) {
            const img = createImageElement(player.photo, player.name, index);
            const span = createSpanElement(player.name, index);

            div.appendChild(img);
            div.appendChild(span);
        }
    });
}

function createImageElement(src, alt, index) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.width = 50; 
    img.id = `photo-${index}`;
    img.addEventListener('click', () => selectPlayer(index, alt));
    return img;
}

function createSpanElement(text, index) {
    const span = document.createElement('span');
    span.textContent = text;
    span.id = `name-${index}`;
    span.classList.add('player-name');
    span.dataset.index = index;
    return span;
}

function selectPlayer(index, name) {
    selectedPlayerIndex = index;
    const inputElement = document.getElementById('namePlayer');
    inputElement.value = name;
    inputElement.focus();
}

function editNamePlayer() {
    const inputElement = document.getElementById('namePlayer');
    const newName = inputElement.value;

    if (selectedPlayerIndex !== null) {
        const nameElement = document.getElementById(`name-${selectedPlayerIndex}`);
        nameElement.textContent = newName;

        const photoElement = document.getElementById(`photo-${selectedPlayerIndex}`);
        photoElement.alt = newName;
        photoElement.src = `images/${newName.toLowerCase().replace(/ /g, '-')}.png`;
    }
}
