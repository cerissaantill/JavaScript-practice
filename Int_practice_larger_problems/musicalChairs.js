

// MUSICAL CHAIRS:

// array of players
let players = ['cerissa','katie','stuart', 'harrison'];

// array of chairs or number of chairs?
let chairs = 3;  // don't even need this - just use players.length

// function to place players in chairs & return remaining player
function placePlayers() {
    let playerIndex = Math.floor(Math.random() * players.length);
    let player = players[playerIndex];

    players.splice(playerIndex, 1);

    return player;
}


//  - select a random player to sit in a chair
//  - do this for all but one player
// remove player from array of players
// decrease the number of chairs
// repeat until there is one player left


console.log(players);

while(players.length > 1) {

    let player = placePlayers();

    console.log(player + ' is left out!');
    console.log(players);

    chairs--; // do not need
}

console.log(players[0] + ' won!');

// Practice: let's do each of these parts in turn