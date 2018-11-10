import { Component, OnInit, Input } from '@angular/core';
import { Inhabitant } from './../model/inhabitantt';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-inhabitant-list',
  templateUrl: './inhabitant-list.component.html',
  styleUrls: ['./inhabitant-list.component.css']
})
export class inhabitantListComponent implements OnInit {

  @Input()
  inhabitants: Inhabitant[];

  constructor() {
    
  }

  ngOnInit() {
    this.inhabitants = new Array<Inhabitant>(); 
  }

}
