import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SDataViewComponent} from './sdata-view.component';

describe('SDataViewComponent', () => {
  let component: SDataViewComponent;
  let fixture: ComponentFixture<SDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SDataViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
