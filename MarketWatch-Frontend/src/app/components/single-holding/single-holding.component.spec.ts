import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHoldingComponent } from './single-holding.component';

describe('SingleHoldingComponent', () => {
  let component: SingleHoldingComponent;
  let fixture: ComponentFixture<SingleHoldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHoldingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
