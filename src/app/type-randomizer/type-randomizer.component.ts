import { Component, OnInit } from '@angular/core';
import {Fakemon} from "../data/fakemon/types/Fakemon";

@Component({
  selector: 'type-randomizer',
  templateUrl: './type-randomizer.component.html',
  styleUrls: ['./type-randomizer.component.scss']
})
export class TypeRandomizerComponent implements OnInit {

  primary = "";
  secondary = "";
  isDualType = true;

  size_metric: number = 0;
  size_metric_human: string = "";
  size_imperial: number = 0;
  size_imperial_human: string = "";

  weight_metric_human: string = "";
  weight_imperial_human: string = "";
  fakemon: Fakemon;

  constructor( fakemon: Fakemon ) {
    this.fakemon = fakemon;
  }

  ngOnInit() {
    this.primary = this.fakemon.type.primary;
    this.secondary = this.fakemon.type.secondary;
    this.isDualType = !this.fakemon.type.isMonoType();

    this.calculateSize( 10, 2000 );
    this.weight_metric_human = this.fakemon.weight.toKg();
    this.weight_imperial_human = this.fakemon.weight.toLbs();
  }

  private calculateSize(min_cm: number, max_cm: number) {
    this.size_metric = (Math.random() * max_cm) + min_cm; //cm
    this.size_imperial = Math.round( this.size_metric / 2.54 ); //inches

    this.size_metric_human = (this.size_metric / 100).toFixed(2) + " m";
    this.size_imperial_human = Math.floor( this.size_imperial / 12 ) + "\'" + (this.size_imperial % 12) + "\"";
  }
}
