import { Component, OnInit } from '@angular/core';
import {Fakemon} from "../data/fakemon/types/Fakemon";

@Component({
  selector: 'stat-randomizer',
  templateUrl: './stat-randomizer.component.html',
  styleUrls: ['./stat-randomizer.component.scss']
})
export class StatRandomizerComponent implements OnInit {
  fakemon: Fakemon;

  constructor( fakemon: Fakemon ) {
    this.fakemon = fakemon;
  }

  ngOnInit() {
  }
}
