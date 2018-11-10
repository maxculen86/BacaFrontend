import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inhabitantRowComponent } from './inhabitant-row.component';

describe('inhabitantRowComponent', () => {
  let component: inhabitantRowComponent;
  let fixture: ComponentFixture<inhabitantRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inhabitantRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inhabitantRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
