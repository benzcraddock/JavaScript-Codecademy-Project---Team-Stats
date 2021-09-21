// create empty object called team. add two properties to team object _players and _games and populate arrays with three actual players and three actual games, respectively. create getter methods for keys, do not create setter methods because we do not want anyone to change values saved to keys. add method addPlayer to team object with three parameters - firstName, lastName, age, and have it create a player object, add to team's players array. invoke addPlayer and add three players, print to check. addGame method, invoke and print games array.
const team = {
  _players: [
    { firstName: 'Michael', lastName: 'Jordan', age: 23 },
    { firstName: 'Kobe', lastName: 'Bryant', age: 24 },
    { firstName: 'Lebron', lastName: 'James', age: 6 }
  ],
  _games: [
    { opponent: 'Bulls', teamPoints: 110, opponentPoints: 81 },
    { opponent: 'Heat', teamPoints: 69, opponentPoints: 112 },
    { opponent: 'Lakers', teamPoints: 124, opponentPoints: 115 }
  ],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    let player = { firstName, lastName, age };
    return this._players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) {
    let game = { opponent, teamPoints, opponentPoints };
    return this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Knicks', 103, 102);
team.addGame('Celtics', 88, 94);
team.addGame('Warriors', 148, 108);

console.log(team.players);
console.log(team.games);

