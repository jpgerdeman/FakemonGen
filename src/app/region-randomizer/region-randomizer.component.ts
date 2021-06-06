import { Component, OnInit } from '@angular/core';
import {Fakemon} from "../data/fakemon/types/Fakemon";


@Component({
  selector: 'region-randomizer',
  templateUrl: './region-randomizer.component.html',
  styleUrls: ['./region-randomizer.component.scss']
})
export class RegionRandomizerComponent implements OnInit {

  fakemon: Fakemon;

  constructor( fakemon: Fakemon ) {
    this.fakemon = fakemon;
  }

  ngOnInit() {
  }
}
