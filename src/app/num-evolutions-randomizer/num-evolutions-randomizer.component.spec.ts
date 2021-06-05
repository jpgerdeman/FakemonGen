import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumEvolutionsRandomizerComponent } from './num-evolutions-randomizer.component';

describe('NumEvolutionsRandomizerComponent', () => {
  let component: NumEvolutionsRandomizerComponent;
  let fixture: ComponentFixture<NumEvolutionsRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumEvolutionsRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumEvolutionsRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
