import { selectPlayers, selectTeams } from './utils/playerSelector.js';

const eligiblePlayers = selectPlayers().map((player) => ({ ...player, soldPrice: 0 }));
const { team1, team2 } = selectTeams();

console.log('Cricket Auction Manager');
console.log('Eligible Players:');
eligiblePlayers.forEach((player) => {
  console.log(`ID: ${player.id}, Name: ${player.name}, Age: ${player.age}, PlayerType: ${player.playerType}, Base Price: ${player.basePrice}`);
});

console.log('\nAuction Result');
console.log('\nCSK:');
team1.forEach((player) => {
  console.log(`ID: ${player.id}, Name: ${player.name}, Age: ${player.age}, PlayerType: ${player.playerType}, Base Price: ${player.basePrice}, Sold Price: ${player.soldPrice}`);
});

console.log('\nRCB:');
team2.forEach((player) => {
  console.log(`ID: ${player.id}, Name: ${player.name}, Age: ${player.age}, PlayerType: ${player.playerType}, Base Price: ${player.basePrice}, Sold Price: ${player.soldPrice}`);
});
