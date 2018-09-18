import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAccordionGroupComponent } from './faq-accordion-group.component';

describe('FaqAccordionGroupComponent', () => {
  let component: FaqAccordionGroupComponent;
  let fixture: ComponentFixture<FaqAccordionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqAccordionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqAccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
