import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'num-evolutions-randomizer',
  templateUrl: './num-evolutions-randomizer.component.html',
  styleUrls: ['./num-evolutions-randomizer.component.scss']
})
export class NumEvolutionsRandomizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  random() {
    return Math.floor(Math.random() * 2.9);
  }
}
