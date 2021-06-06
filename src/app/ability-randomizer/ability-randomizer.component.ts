import { Component, OnInit } from '@angular/core';
import {Fakemon} from "../data/fakemon/types/Fakemon";

@Component({
  selector: 'ability-randomizer',
  templateUrl: './ability-randomizer.component.html',
  styleUrls: ['./ability-randomizer.component.scss']
})

export class AbilityRandomizerComponent implements OnInit {

  fakemon: Fakemon;

  constructor( fakemon: Fakemon ) {
    this.fakemon = fakemon;
  }

  ngOnInit() {
  }
}
