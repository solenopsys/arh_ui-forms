import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SFieldComponent} from './sfield.component';

describe('SFieldComponent', () => {
  let component: SFieldComponent;
  let fixture: ComponentFixture<SFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
