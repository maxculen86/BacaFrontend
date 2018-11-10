import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchinhabitantsComponent } from './search-inhabitants.component';

describe('SearchinhabitantsComponent', () => {
  let component: SearchinhabitantsComponent;
  let fixture: ComponentFixture<SearchinhabitantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchinhabitantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchinhabitantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
