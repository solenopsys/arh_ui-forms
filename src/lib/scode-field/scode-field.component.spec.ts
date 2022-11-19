import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SCodeFieldComponent} from './scode-field.component';

describe('SCodeFieldComponent', () => {
  let component: SCodeFieldComponent;
  let fixture: ComponentFixture<SCodeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SCodeFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCodeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
