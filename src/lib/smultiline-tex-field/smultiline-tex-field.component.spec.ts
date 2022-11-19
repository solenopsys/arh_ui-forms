import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SMultilineTexFieldComponent} from './smultiline-tex-field.component';

describe('SMultilineTexFieldComponent', () => {
  let component: SMultilineTexFieldComponent;
  let fixture: ComponentFixture<SMultilineTexFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SMultilineTexFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMultilineTexFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
