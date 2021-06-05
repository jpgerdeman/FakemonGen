import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIndicatorComponent } from './link-indicator.component';

describe('LinkIndicatorComponent', () => {
  let component: LinkIndicatorComponent;
  let fixture: ComponentFixture<LinkIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
