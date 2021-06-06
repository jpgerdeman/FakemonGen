import { Component, OnInit } from '@angular/core';
import {Fakemon} from "../data/fakemon/types/Fakemon";

@Component({
  selector: 'num-evolutions-randomizer',
  templateUrl: './num-evolutions-randomizer.component.html',
  styleUrls: ['./num-evolutions-randomizer.component.scss']
})
export class NumEvolutionsRandomizerComponent implements OnInit {

  fakemon: Fakemon;

  constructor( fakemon: Fakemon ) {
    this.fakemon = fakemon;
  }

  ngOnInit() {
  }
}
