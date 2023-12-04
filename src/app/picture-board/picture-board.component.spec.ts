import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureBoardComponent } from './picture-board.component';

describe('PictureBoardComponent', () => {
  let component: PictureBoardComponent;
  let fixture: ComponentFixture<PictureBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureBoardComponent]
    });
    fixture = TestBed.createComponent(PictureBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
