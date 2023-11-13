import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBrowseComponent } from './customer-browse.component';

describe('CustomerBrowseComponent', () => {
  let component: CustomerBrowseComponent;
  let fixture: ComponentFixture<CustomerBrowseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerBrowseComponent]
    });
    fixture = TestBed.createComponent(CustomerBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
