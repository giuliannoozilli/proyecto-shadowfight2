import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NudillosComponent } from './nudillos.component';

describe('NudillosComponent', () => {
  let component: NudillosComponent;
  let fixture: ComponentFixture<NudillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NudillosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NudillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
