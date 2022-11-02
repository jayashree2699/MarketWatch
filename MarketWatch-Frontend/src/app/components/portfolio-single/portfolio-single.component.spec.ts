import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSingleComponent } from './portfolio-single.component';

describe('PortfolioSingleComponent', () => {
  let component: PortfolioSingleComponent;
  let fixture: ComponentFixture<PortfolioSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
