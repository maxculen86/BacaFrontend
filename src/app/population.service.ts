import { Injectable } from '@angular/core';
import { Inhabitant } from './model/inhabitantt';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import { inhabitantFilter } from './inhabitant-filter/inhabitant-filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


@Injectable()
export class PopulationService {

  constructor(private http: Http) {
    this.inhabitants = null;
  }

  private ApiResult;
  private inhabitants: Inhabitant[];

  get Inhabitants(): Observable<Inhabitant[]> {
    return Observable.of(this.inhabitants);
  };

  get Weights(): Array<number> {
    return this.inhabitants.reduce((acc, inhabitant: Inhabitant) => {
      const weirange = Math.floor(inhabitant.weight / 5) * 5;
      if (!acc.includes(weirange)) {
        return [...acc, weirange];
      }
      return acc;
    }, []).sort((w1: number, w2: number) => (w1 > w2 ? 0:1));
  }

  get Heights(): Array<number> {
    return this.inhabitants.reduce((acc, inhabitant: Inhabitant) => {
      const h_range = Math.floor(inhabitant.height / 5) * 5;
      if (!acc.includes(h_range)) {
        return [...acc, h_range];
      }
      return acc;
    }, []).sort((h1: number, h2: number) => (h1 > h2 ? 0:1));
  }  

  get Hairs(): Array<string> {
    return this.inhabitants.reduce((acc, inhabitant: Inhabitant) => {
      if (!acc.includes(inhabitant.hair_color)) {
        return [...acc, inhabitant.hair_color];
      }
      return acc;
    }, []).sort((h1: string, h2: string) => (h1 > h2 ? 0:1));
  }  

  isSelected(value: number, options: number[]) {
    return options.reduce((isTrue, option) => isTrue ? true : (value >= option && value < option + 5), false); 
  }

  Getinhabitant(id: number): Observable<Inhabitant[]> {
    return this.Search('', new inhabitantFilter(), true).map(inhabitants => inhabitants.filter( inhabitant => inhabitant.id == id));
  }

  Search(value: string, filter: inhabitantFilter, all: boolean = false): Observable<Inhabitant[]> {
    const url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
   
    console.log("Searching " + JSON.stringify(filter));
    if (this.inhabitants != null) {
      return Observable.of(this.Filter(value, filter, this.inhabitants, all));
    } else {
      return this.http.get(url).map(resp => {
        return resp.json().Brastlewark.map( inhabitant => inhabitant as Inhabitant);
      }).do(inhabitants => {
          this.inhabitants = inhabitants.sort((a1,a2) => a1.name > a2.name);
          return this.inhabitants;
      }).map((arg: Inhabitant[]) => {
          return this.Filter(value, filter, arg, all);

        }
      ); 
    }
    
  }

  Filter(value: string = '', filter: inhabitantFilter, inhabitants: Inhabitant[], all: boolean = false): Inhabitant[] {
    
    if (!all && value.trim() === '' &&
       filter.Hairs.length === 0 &&
      filter.Heights.length === 0 && 
    filter.Weights.length === 0) return new Array<Inhabitant>();
    console.log("FILTRANDO");
    const valueToSearch = value.toLowerCase();
    return inhabitants.filter(
      inhabitant => (
        inhabitant.name.toLowerCase().includes(valueToSearch) && 
        (filter.Weights.length == 0 || this.isSelected(inhabitant.weight, filter.Weights) &&
        (filter.Heights.length == 0 || this.isSelected(inhabitant.height, filter.Heights) && 
        (filter.Hairs.length == 0 || filter.Hairs.includes(inhabitant.hair_color))))
        
      ));
  }
}
