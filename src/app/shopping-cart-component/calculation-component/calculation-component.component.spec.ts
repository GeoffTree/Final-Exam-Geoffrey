import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationComponentComponent } from './calculation-component.component';

describe('CalculationComponentComponent', () => {
  let component: CalculationComponentComponent;
  let fixture: ComponentFixture<CalculationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
