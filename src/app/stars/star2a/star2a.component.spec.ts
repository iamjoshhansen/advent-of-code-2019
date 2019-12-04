import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Star2aComponent} from './star2a.component';

describe('Star2aComponent', () => {
  let component: Star2aComponent;
  let fixture: ComponentFixture<Star2aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Star2aComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Star2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
