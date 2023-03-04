import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UIdFieldComponent} from './uid-field.component';

describe('SuidFieldComponent', () => {
  let component: UIdFieldComponent;
  let fixture: ComponentFixture<UIdFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UIdFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIdFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
