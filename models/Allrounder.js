import { Player } from './Player.js';

export class Allrounder extends Player {
  constructor(name, age, basePrice = 0, soldPrice = 0) {
    super(name, age, 'AllRounder', basePrice, soldPrice);
    this.playerType = 'allrounder';
  }
}
