import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkFooterComponent } from './trademark-footer.component';

describe('TrademarkFooterComponent', () => {
  let component: TrademarkFooterComponent;
  let fixture: ComponentFixture<TrademarkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrademarkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
