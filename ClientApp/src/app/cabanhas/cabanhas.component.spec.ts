import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabanhasComponent } from './cabanhas.component';

describe('CabanhasComponent', () => {
  let component: CabanhasComponent;
  let fixture: ComponentFixture<CabanhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabanhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabanhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
