import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SDateFieldComponent} from './sdate-field.component';

describe('SDateFieldComponent', () => {
  let component: SDateFieldComponent;
  let fixture: ComponentFixture<SDateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SDateFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
