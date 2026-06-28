export class Player {
  constructor(name, age, role, basePrice = 0, soldPrice = 0) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.basePrice = basePrice;
    this.soldPrice = soldPrice;
  }
}
