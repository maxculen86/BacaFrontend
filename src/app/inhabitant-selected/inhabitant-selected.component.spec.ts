import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inhabitantSelectedComponent } from './inhabitant-selected.component';

describe('inhabitantSelectedComponent', () => {
  let component: inhabitantSelectedComponent;
  let fixture: ComponentFixture<inhabitantSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inhabitantSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inhabitantSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
