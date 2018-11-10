import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inhabitantFilterComponent } from './inhabitant-filter.component';

describe('inhabitantFilterComponent', () => {
  let component: inhabitantFilterComponent;
  let fixture: ComponentFixture<inhabitantFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inhabitantFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inhabitantFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
