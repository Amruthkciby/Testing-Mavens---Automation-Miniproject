import { Player } from './Player.js';

export class Bowler extends Player {
  constructor(name, age, basePrice = 0, soldPrice = 0) {
    super(name, age, 'Bowler', basePrice, soldPrice);
    this.playerType = 'bowler';
  }
}
