import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S38e185ChildComponent } from './s38e185-child.component';

describe('S38e185ChildComponent', () => {
  let component: S38e185ChildComponent;
  let fixture: ComponentFixture<S38e185ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38e185ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S38e185ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
