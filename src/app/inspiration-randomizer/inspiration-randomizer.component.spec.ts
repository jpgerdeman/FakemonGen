import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationRandomizerComponent } from './inspiration-randomizer.component';

describe('InspirationRandomizerComponent', () => {
  let component: InspirationRandomizerComponent;
  let fixture: ComponentFixture<InspirationRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
