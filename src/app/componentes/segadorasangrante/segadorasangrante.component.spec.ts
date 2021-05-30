import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegadorasangranteComponent } from './segadorasangrante.component';

describe('SegadorasangranteComponent', () => {
  let component: SegadorasangranteComponent;
  let fixture: ComponentFixture<SegadorasangranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegadorasangranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegadorasangranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
