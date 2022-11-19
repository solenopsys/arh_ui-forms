import {ComponentFixture, TestBed} from '@angular/core/testing';

import {STextFieldComponent} from './stext-field.component';

describe('STextFieldComponent', () => {
  let component: STextFieldComponent;
  let fixture: ComponentFixture<STextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [STextFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
