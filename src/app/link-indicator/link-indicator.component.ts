import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'link-indicator',
  templateUrl: './link-indicator.component.html',
  styleUrls: ['./link-indicator.component.scss']
})
export class LinkIndicatorComponent implements OnInit {

  @Input() href: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
