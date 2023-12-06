import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPuzzlesComponent } from './completed-puzzles.component';

describe('CompletedPuzzlesComponent', () => {
  let component: CompletedPuzzlesComponent;
  let fixture: ComponentFixture<CompletedPuzzlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedPuzzlesComponent]
    });
    fixture = TestBed.createComponent(CompletedPuzzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
