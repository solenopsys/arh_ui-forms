
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileFieldComponent} from './file-field.component';

describe('SFileFieldComponent', () => {
  let component: FileFieldComponent;
  let fixture: ComponentFixture<FileFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
