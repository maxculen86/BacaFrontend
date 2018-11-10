import { Component, OnInit, Input } from '@angular/core';
import { Inhabitant } from './../model/inhabitantt';


@Component({
  selector: 'app-inhabitant-row',
  templateUrl: './inhabitant-row.component.html',
  styleUrls: ['./inhabitant-row.component.css']
})
export class inhabitantRowComponent implements OnInit {

  @Input() inhabitant: Inhabitant;

  constructor() { }

  ngOnInit() {

  }

}
