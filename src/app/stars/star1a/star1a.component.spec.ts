import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Star1aComponent} from './star1a.component';

describe('Star1aComponent', () => {
  let component: Star1aComponent;
  let fixture: ComponentFixture<Star1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Star1aComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Star1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
