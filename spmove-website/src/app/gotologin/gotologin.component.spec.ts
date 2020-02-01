import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotologinComponent } from './gotologin.component';

describe('GotologinComponent', () => {
  let component: GotologinComponent;
  let fixture: ComponentFixture<GotologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
