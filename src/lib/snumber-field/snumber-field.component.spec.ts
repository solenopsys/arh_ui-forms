import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SNumberFieldComponent} from './snumber-field.component';

describe('SNumberFieldComponent', () => {
  let component: SNumberFieldComponent;
  let fixture: ComponentFixture<SNumberFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SNumberFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SNumberFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
