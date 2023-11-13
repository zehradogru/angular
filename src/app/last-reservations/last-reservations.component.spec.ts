import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReservationsComponent } from './last-reservations.component';

describe('LastReservationsComponent', () => {
  let component: LastReservationsComponent;
  let fixture: ComponentFixture<LastReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastReservationsComponent]
    });
    fixture = TestBed.createComponent(LastReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
