import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatRandomizerComponent } from './stat-randomizer.component';

describe('StatRandomizerComponent', () => {
  let component: StatRandomizerComponent;
  let fixture: ComponentFixture<StatRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
