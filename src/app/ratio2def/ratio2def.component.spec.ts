import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ratio2defComponent } from './ratio2def.component';

describe('Ratio2defComponent', () => {
  let component: Ratio2defComponent;
  let fixture: ComponentFixture<Ratio2defComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ratio2defComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ratio2defComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
