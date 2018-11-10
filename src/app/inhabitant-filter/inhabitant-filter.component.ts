import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { inhabitantFilter } from './inhabitant-filter';

@Component({
  selector: 'app-inhabitant-filter',
  templateUrl: './inhabitant-filter.component.html',
  styleUrls: ['./inhabitant-filter.component.css']
})
export class inhabitantFilterComponent implements OnInit {

  @Input() weights: number[];
  @Input() heights: number[];
  @Input() hairs: string[];

  inhabitantFilter: inhabitantFilter;

  @Output()  filter: EventEmitter<inhabitantFilter> = new EventEmitter<inhabitantFilter>();

  constructor() { }

  ngOnInit() {
    this.inhabitantFilter = new inhabitantFilter();
  }

  onCheckWeight(value: number) {
    const nValue = Number(value);
    this.inhabitantFilter.Weights.includes(nValue) ? 
      this.inhabitantFilter.Weights = this.inhabitantFilter.Weights.filter(item => item !== nValue) : 
      this.inhabitantFilter.Weights.push(nValue);

    this.filter.emit(this.inhabitantFilter);
  }
  onCheckHeight(value: number) {
    const nValue = Number(value);
    this.inhabitantFilter.Heights.includes(nValue) ? 
      this.inhabitantFilter.Heights = this.inhabitantFilter.Heights.filter(item => item !== nValue) : 
      this.inhabitantFilter.Heights.push(nValue);

    this.filter.emit(this.inhabitantFilter);
  }
  onCheckHair(value: string) {
    this.inhabitantFilter.Hairs.includes(value) ? 
      this.inhabitantFilter.Hairs = this.inhabitantFilter.Hairs.filter(item => item !== value) : 
      this.inhabitantFilter.Hairs.push(value);

      this.filter.emit(this.inhabitantFilter);
  }
  onOpen() {
    this.filter.emit(this.inhabitantFilter);
  }
}
