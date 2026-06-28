import fs from 'fs';
import path from 'path';
import { Batter } from '../models/Batter.js';
import { Bowler } from '../models/Bowler.js';
import { Allrounder } from '../models/Allrounder.js';
import { Team } from '../models/Team.js';

const dataPath = path.resolve(process.cwd(), 'testdata.json');

function createPlayer(data) {
  let player;

  if (data.playerType === 'batter') {
    player = new Batter(data.name.toUpperCase(), data.age, data.basePrice, data.soldPrice);
  } else if (data.playerType === 'bowler') {
    player = new Bowler(data.name.toUpperCase(), data.age, data.basePrice, data.soldPrice);
  } else {
    player = new Allrounder(data.name.toUpperCase(), data.age, data.basePrice, data.soldPrice);
  }

  player.id = data.id;
  return player;
}

export function selectPlayers() {
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const players = JSON.parse(fileContents);

  return players
    .filter((player) => player.age >= 18)
    .slice(0, 10)
    .map(createPlayer);
}

export function selectTeams() {
  const players = selectPlayers();
  const team1 = new Team('CSK', players.slice(0, 5));
  const team2 = new Team('RCB', players.slice(5, 10));

  return { team1, team2 };
}
