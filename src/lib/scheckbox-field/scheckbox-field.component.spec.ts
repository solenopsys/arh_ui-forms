import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SCheckboxFieldComponent} from './scheckbox-field.component';

describe('SCheckboxFieldComponent', () => {
  let component: SCheckboxFieldComponent;
  let fixture: ComponentFixture<SCheckboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SCheckboxFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
