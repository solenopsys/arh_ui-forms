import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SSelectEntityComponent} from './s-select-entity.component';

describe('SSelectEnityComponent', () => {
  let component: SSelectEntityComponent;
  let fixture: ComponentFixture<SSelectEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SSelectEntityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSelectEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
