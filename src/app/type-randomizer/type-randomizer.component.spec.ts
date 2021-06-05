import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRandomizerComponent } from './type-randomizer.component';

describe('TypeRandomizerComponent', () => {
  let component: TypeRandomizerComponent;
  let fixture: ComponentFixture<TypeRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
