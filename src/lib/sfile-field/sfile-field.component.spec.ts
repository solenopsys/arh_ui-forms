import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SFileFieldComponent} from './sfile-field.component';

describe('SFileFieldComponent', () => {
  let component: SFileFieldComponent;
  let fixture: ComponentFixture<SFileFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SFileFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SFileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
