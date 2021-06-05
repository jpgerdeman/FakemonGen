import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityRandomizerComponent } from './ability-randomizer.component';

describe('AbilityRandomizerComponent', () => {
  let component: AbilityRandomizerComponent;
  let fixture: ComponentFixture<AbilityRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
