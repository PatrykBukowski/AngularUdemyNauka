import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S37Component } from './s37.component';

describe('S37Component', () => {
  let component: S37Component;
  let fixture: ComponentFixture<S37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
