import { selectPlayers, selectTeams } from './utils/playerSelector.js';

const eligiblePlayers = selectPlayers();
const { team1, team2 } = selectTeams();

console.log('Cricket Auction Manager');
console.log('Eligible Players:');
eligiblePlayers.forEach((player) => {
  console.log(`ID: ${player.id}, Name: ${player.name}, Age: ${player.age}, PlayerType: ${player.playerType}, Base Price: ${player.basePrice}`);
});

console.log('\nAuction Result');
console.log(`\n${team1.name}:`);
team1.players.forEach((player) => {
  console.log(`ID: ${player.id}, Name: ${player.name}, Age: ${player.age}, PlayerType: ${player.playerType}, Base Price: ${player.basePrice}, Sold Price: ${player.soldPrice}`);
});

console.log(`\n${team2.name}:`);
team2.players.forEach((player) => {
  console.log(`ID: ${player.id}, Name: ${player.name}, Age: ${player.age}, PlayerType: ${player.playerType}, Base Price: ${player.basePrice}, Sold Price: ${player.soldPrice}`);
});
