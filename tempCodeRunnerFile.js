import { selectTeams } from './utils/playerSelector.js';
import { Allrounder } from './models/Allrounder.js';
import { Batter } from './models/Batter.js';
import { Bowler } from './models/Bowler.js';
import { Team } from './models/Team.js';

const { team1, team2 } = selectTeams();

console.log('RCB:', team1);
console.log('CSK:', team2);
