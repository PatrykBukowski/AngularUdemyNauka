import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S38e186ChildComponent } from './s38e186-child.component';

describe('S38e186ChildComponent', () => {
  let component: S38e186ChildComponent;
  let fixture: ComponentFixture<S38e186ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38e186ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S38e186ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
