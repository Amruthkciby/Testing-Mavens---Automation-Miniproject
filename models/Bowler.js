import { Player } from './Player.js';

export class Bowler extends Player {
  constructor(name, age) {
    super(name, age, 'Bowler');
    this.playerType = 'bowler';
  }
}
