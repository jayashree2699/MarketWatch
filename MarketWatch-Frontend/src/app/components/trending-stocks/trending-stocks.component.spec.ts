import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingStocksComponent } from './trending-stocks.component';

describe('TrendingStocksComponent', () => {
  let component: TrendingStocksComponent;
  let fixture: ComponentFixture<TrendingStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
