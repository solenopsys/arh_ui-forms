import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CaseFieldComponent} from './case-field.component';

describe('SFieldComponent', () => {
  let component: CaseFieldComponent;
  let fixture: ComponentFixture<CaseFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
