import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QareviewComponent } from './qareview.component';

describe('QareviewComponent', () => {
  let component: QareviewComponent;
  let fixture: ComponentFixture<QareviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QareviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QareviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
