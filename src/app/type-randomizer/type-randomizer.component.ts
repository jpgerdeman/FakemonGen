import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'type-randomizer',
  templateUrl: './type-randomizer.component.html',
  styleUrls: ['./type-randomizer.component.scss']
})
export class TypeRandomizerComponent implements OnInit {

  type = [ 'Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy'];

  primary = "";
  secondary = "";
  isDualType = true;

  size_metric: number = 0;
  size_metric_human: string = "";
  size_imperial: number = 0;
  size_imperial_human: string = "";

  weight_metric: number = 0;
  weight_metric_human: string = "";
  weight_imperial: number = 0;
  weight_imperial_human: string = "";

  constructor() { }

  ngOnInit() {
    this.primary = this.randomType();
    this.secondary = this.randomType();
    this.isDualType = this.primary !== this.secondary;

    this.calculateSize( 10, 2000 );
    this.calculateWeight( 100, 2000 );
  }

  randomType(): string {
    return this.type[Math.floor(Math.random() * this.type.length)];
  }

  private calculateSize(min_cm: number, max_cm: number) {
    this.size_metric = (Math.random() * max_cm) + min_cm; //cm
    this.size_imperial = Math.round( this.size_metric / 2.54 ); //inches

    this.size_metric_human = (this.size_metric / 100).toFixed(2) + " m";
    this.size_imperial_human = Math.floor( this.size_imperial / 12 ) + "\'" + (this.size_imperial % 12) + "\"";
  }

  private calculateWeight(min_gram: number, max_gram: number) {
    this.weight_metric = (Math.random() * max_gram) + min_gram; //gram
    this.weight_imperial = this.weight_metric / 453.6 //lbs

    this.weight_metric_human = (this.weight_metric / 1000).toFixed(1) + " kg";
    this.weight_imperial_human = this.weight_imperial.toFixed(2) + " lbs";
  }
}
