import { Player } from './Player.js';

export class Batter extends Player {
  constructor(name, age, basePrice = 0, soldPrice = 0) {
    super(name, age, 'Batter', basePrice, soldPrice);
    this.playerType = 'batter';
  }
}
