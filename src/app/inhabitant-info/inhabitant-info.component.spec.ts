import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inhabitantInfoComponent } from './inhabitant-info.component';

describe('inhabitantInfoComponent', () => {
  let component: inhabitantInfoComponent;
  let fixture: ComponentFixture<inhabitantInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inhabitantInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inhabitantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
