import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorGenComponent } from './resistor-gen.component';

describe('ResistorGenComponent', () => {
  let component: ResistorGenComponent;
  let fixture: ComponentFixture<ResistorGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResistorGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistorGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
