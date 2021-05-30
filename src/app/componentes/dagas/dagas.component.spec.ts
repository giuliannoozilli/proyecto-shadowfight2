import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagasComponent } from './dagas.component';

describe('DagasComponent', () => {
  let component: DagasComponent;
  let fixture: ComponentFixture<DagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
