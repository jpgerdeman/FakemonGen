import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionRandomizerComponent } from './region-randomizer.component';

describe('RegionRandomizerComponent', () => {
  let component: RegionRandomizerComponent;
  let fixture: ComponentFixture<RegionRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
