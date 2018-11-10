import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inhabitantListComponent } from './inhabitant-list.component';

describe('inhabitantListComponent', () => {
  let component: inhabitantListComponent;
  let fixture: ComponentFixture<inhabitantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inhabitantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inhabitantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
