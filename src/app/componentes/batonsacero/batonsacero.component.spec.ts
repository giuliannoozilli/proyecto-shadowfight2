import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatonsaceroComponent } from './batonsacero.component';

describe('BatonsaceroComponent', () => {
  let component: BatonsaceroComponent;
  let fixture: ComponentFixture<BatonsaceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatonsaceroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatonsaceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
