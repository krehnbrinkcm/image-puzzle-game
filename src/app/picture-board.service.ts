// picture-board.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PictureBoardService {
  imageLinkArray: any[][] = [];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.imageLinkArray[i] = [];
      for (let j = 0; j < 4; j++) {
        this.imageLinkArray[i][j] = { url: '', selected: false };
      }
    }
  }

  updateImageArray(row: number, data: any[]) {
    this.imageLinkArray[row] = data;
  }
}
