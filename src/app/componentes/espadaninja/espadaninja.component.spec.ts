import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspadaninjaComponent } from './espadaninja.component';

describe('EspadaninjaComponent', () => {
  let component: EspadaninjaComponent;
  let fixture: ComponentFixture<EspadaninjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspadaninjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspadaninjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
