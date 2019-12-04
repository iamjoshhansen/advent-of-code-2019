import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Star2bComponent} from './star2b.component';

describe('Star2bComponent', () => {
  let component: Star2bComponent;
  let fixture: ComponentFixture<Star2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Star2bComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Star2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
