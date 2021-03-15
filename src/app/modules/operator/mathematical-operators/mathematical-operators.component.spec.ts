import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicalOperatorsComponent } from './mathematical-operators.component';

describe('MathematicalOperatorsComponent', () => {
  let component: MathematicalOperatorsComponent;
  let fixture: ComponentFixture<MathematicalOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathematicalOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematicalOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
