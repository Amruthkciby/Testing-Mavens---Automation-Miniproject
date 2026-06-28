import { Player } from './Player.js';

export class Batter extends Player {
  constructor(name, age) {
    super(name, age, 'Batter');
    this.playerType = 'batter';
  }
}
