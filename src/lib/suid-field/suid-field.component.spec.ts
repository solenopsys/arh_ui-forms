import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SuidFieldComponent} from './suid-field.component';

describe('SuidFieldComponent', () => {
  let component: SuidFieldComponent;
  let fixture: ComponentFixture<SuidFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuidFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuidFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
