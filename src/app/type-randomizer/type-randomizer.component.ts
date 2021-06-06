import { Component, OnInit } from '@angular/core';
import {Fakemon} from "../data/fakemon/types/Fakemon";

@Component({
  selector: 'type-randomizer',
  templateUrl: './type-randomizer.component.html',
  styleUrls: ['./type-randomizer.component.scss']
})
export class TypeRandomizerComponent implements OnInit {

  fakemon: Fakemon;

  constructor( fakemon: Fakemon ) {
    this.fakemon = fakemon;
  }

  ngOnInit() {
  }
}
