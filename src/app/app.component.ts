import { Component } from '@angular/core';
import { Inhabitant } from './model/inhabitantt';
import { PopulationService } from './population.service';
import { inhabitantFilter } from './inhabitant-filter/inhabitant-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gnome - inhabitants App';

  inhabitants: Inhabitant[];
  weights: number[];
  heights: number[];
  hairs: string[];

  search: string;
  inhabitantFilter: inhabitantFilter;

  constructor(private populationService: PopulationService) {

  }
  
  ngOnInit() {
    this.inhabitantFilter = new inhabitantFilter();
  }

  onSearch(value: string){
    this.search = value;
    this.applyFiltersAndSearch(this.search, this.inhabitantFilter);
  }

  onFilter(value: inhabitantFilter) {
    this.inhabitantFilter = value;
    this.applyFiltersAndSearch(this.search, this.inhabitantFilter);
  }

  applyFiltersAndSearch(search: string, inhabitantFilter: inhabitantFilter) {
    this.populationService.Search(search, inhabitantFilter).subscribe(population => {
      this.inhabitants = population;
      this.weights = this.populationService.Weights;
      this.heights = this.populationService.Heights;
      this.hairs = this.populationService.Hairs;
    });
  }
}
