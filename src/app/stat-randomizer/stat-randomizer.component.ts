import { Component, OnInit } from '@angular/core';

export interface Stat {
  name: string;
  value: number;
  maxvalue: number;
  percentage: number;
  judge: number;
}

@Component({
  selector: 'stat-randomizer',
  templateUrl: './stat-randomizer.component.html',
  styleUrls: ['./stat-randomizer.component.scss']
})
export class StatRandomizerComponent implements OnInit {

  hp = 0;
  attack = 0;
  specialAttack = 0;
  defense = 0;
  specialDefense = 0;
  speed = 0;
  total = 0;

  stats: Array<Stat> = [];

  lowest_bst = 170;
  highest_bst = 680;

  lowest_stat = 5;
  highest_stat = 255;

  constructor() { }

  ngOnInit(): void {
    let stats = this.generate();

    this.stats = [
        this.createState( 'HP', stats[0], 255 ),
        this.createState( 'Attack', stats[1], 255 ),
        this.createState( 'Sp. Atk', stats[2], 255 ),
        this.createState( 'Defense', stats[3], 255 ),
        this.createState( 'Sp. Def', stats[4], 255 ),
        this.createState( 'Speed', stats[5], 255 ),
    ];
    console.log( this.stats );

    this.hp = stats[0];
    this.attack = stats[1];
    this.specialAttack = stats[2];
    this.defense = stats[3];
    this.specialDefense = stats[4];
    this.speed = stats[5];

    this.total = this.sum(stats);
  }

  generate(): Array<number> {

    let randomValue = function(){
      return Math.floor(Math.random() * 250) + 5;
    }

    let stats = [
      randomValue(),
      randomValue(),
      randomValue(),
      randomValue(),
      randomValue(),
      randomValue()
    ];

    let bst = this.sum(stats);
    if( bst > this.highest_bst || bst < this.lowest_bst )
    {
      return this.generate();
    }

    return stats;
  }

  sum( arr: Array<number> ): number
  {
    return arr.reduce((a,b) => a + b);
  }

  createState( name: string, value: number, max: number ): Stat
  {
    return {
        'name': name,
        'value': value,
        'maxvalue': max,
        'percentage': value / max * 100,
        'judge': this.judge( value )
    };
  }

  /**
   * judge the stat, similar to how the game judges IVs
   *
   * @param value
   */
  judge( value: number ): number
  {
    let judge = 0; //no good
    if( value >= 1 && value <= 123 )
    {
      judge = 1; //decent
    }else if( value >= 124 && value <= 205)
    {
      judge = 2; //pretty good
    }
    else if( value >= 206 && value <= 238 )
    {
      judge = 3; //very good
    }
    else if( value >= 239 && value <= 246)
    {
      judge = 4; //fantastic
    }
    else if( value >= 274 )
    {
      judge = 5; //best
    }

    return judge;
  }
}
