import fs from 'fs';
import path from 'path';

const dataPath = path.resolve(process.cwd(), 'testdata.json');

export function selectPlayers() {
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const players = JSON.parse(fileContents);

  return players
    .filter(player => player.age >= 18)
    .map(player => ({ ...player, name: player.name.toUpperCase() }));
}

export function selectTeams() {
  const selected = selectPlayers();
  const team1 = selected.slice(0, 5);
  const team2 = selected.slice(5, 10);
  return { team1, team2 };
}
