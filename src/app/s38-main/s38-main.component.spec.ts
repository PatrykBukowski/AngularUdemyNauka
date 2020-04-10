import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S38MainComponent } from './s38-main.component';

describe('S38MainComponent', () => {
  let component: S38MainComponent;
  let fixture: ComponentFixture<S38MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S38MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
