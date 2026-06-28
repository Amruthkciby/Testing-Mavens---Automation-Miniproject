import { Player } from './Player.js';

export class Allrounder extends Player {
  constructor(name, age) {
    super(name, age, 'AllRounder');
    this.playerType = 'allrounder';
  }
}
