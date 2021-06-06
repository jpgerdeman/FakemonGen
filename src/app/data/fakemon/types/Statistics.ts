import {Stat} from "./Stat";

export class Statistics {
  hp: Stat;
  attack: Stat;
  defense: Stat;
  specialAttack: Stat;
  specialDefense: Stat;
  speed: Stat;

  constructor(hp: Stat, attack: Stat, defense: Stat, specialAttack: Stat, specialDefense: Stat, speed: Stat) {
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
  }

  public static random() {
    return new this(
      Stat.random('HP'),
      Stat.random('Attack'),
      Stat.random('Defense'),
      Stat.random('Sp. Atk'),
      Stat.random('Sp. Def'),
      Stat.random('Speed')
    );
  }

  public totalBaseStatValue(): number {
    return this.hp.value
          + this.attack.value
          + this.defense.value
          + this.specialAttack.value
          + this.specialDefense.value
          + this.speed.value;
  }
}
