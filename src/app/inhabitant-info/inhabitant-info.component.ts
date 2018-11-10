import { Component, OnInit, Input } from '@angular/core';
import { Inhabitant } from './../model/inhabitantt';
import { PopulationService } from '../population.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhabitant-info',
  templateUrl: './inhabitant-info.component.html',
  styleUrls: ['./inhabitant-info.component.css']
})
export class inhabitantInfoComponent implements OnInit {

  @Input() inhabitant: Inhabitant = new Inhabitant();
  
  constructor(private populationService: PopulationService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    this.DisplayRoute();
    this.router.events
    .subscribe((event) => {
      this.DisplayRoute();
    });   

  }

  DisplayRoute() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log("id" + id)
      this.populationService.Getinhabitant(id).subscribe(inhabitants => {
        debugger;
        this.inhabitant = inhabitants[0];
      });
    }    
  }

}
