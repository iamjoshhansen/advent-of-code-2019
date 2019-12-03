import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Star1bComponent} from './star1b.component';

describe('Star1bComponent', () => {
  let component: Star1bComponent;
  let fixture: ComponentFixture<Star1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Star1bComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Star1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
