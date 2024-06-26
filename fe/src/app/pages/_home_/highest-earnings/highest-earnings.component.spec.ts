import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestEarningsComponent } from './highest-earnings.component';

describe('HighestEarningsComponent', () => {
  let component: HighestEarningsComponent;
  let fixture: ComponentFixture<HighestEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighestEarningsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
