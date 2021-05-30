import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachetesComponent } from './machetes.component';

describe('MachetesComponent', () => {
  let component: MachetesComponent;
  let fixture: ComponentFixture<MachetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
