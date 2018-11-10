import { Component, OnInit, Input } from '@angular/core';
import { Inhabitant } from './../model/inhabitantt';

@Component({
  selector: 'app-inhabitant-selected',
  templateUrl: './inhabitant-selected.component.html',
  styleUrls: ['./inhabitant-selected.component.css']
})
export class inhabitantSelectedComponent implements OnInit {

  @Input() inhabitant: Inhabitant = new Inhabitant();

  constructor() { }

  ngOnInit() {
  }

}
