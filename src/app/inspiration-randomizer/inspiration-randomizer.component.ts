import { Component, OnInit } from '@angular/core';
import {Fakemon} from "../data/fakemon/types/Fakemon";

@Component({
  selector: 'inspiration-randomizer',
  templateUrl: './inspiration-randomizer.component.html',
  styleUrls: ['./inspiration-randomizer.component.scss']
})
export class InspirationRandomizerComponent implements OnInit {

  fakemon: Fakemon;

  constructor( fakemon: Fakemon ) {
    this.fakemon = fakemon;
  }

  ngOnInit() {
  }
}
