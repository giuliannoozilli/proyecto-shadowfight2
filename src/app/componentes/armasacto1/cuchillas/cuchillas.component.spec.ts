import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuchillasComponent } from './cuchillas.component';

describe('CuchillasComponent', () => {
  let component: CuchillasComponent;
  let fixture: ComponentFixture<CuchillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuchillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuchillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
