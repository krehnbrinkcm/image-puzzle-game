import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface UnsplashResult {
  urls: {
    regular: string;
  };
}

interface ImageObject {
  url: string;
  selected: boolean;
}

@Component({
  selector: 'app-picture-board',
  templateUrl: './picture-board.component.html',
  styleUrls: ['./picture-board.component.css']
})
export class PictureBoardComponent {

  model: any = {};
  imageLinkArray: ImageObject[][] = [];

  constructor(private http: HttpClient) {
    for (let i = 0; i < 4; i++) {
      this.imageLinkArray[i] = [];
      for (let j = 0; j < 4; j++) {
        this.imageLinkArray[i][j] =  {url: '', selected: false} ;
      }
    }
  }

  onSubmit(form: NgForm) {
    const imageTerms = [this.model.imageTerm1, this.model.imageTerm2, this.model.imageTerm3, this.model.imageTerm4];

    imageTerms.forEach((term, index) => {
      this.searchUnsplash(term, index);
    });
  }

  searchUnsplash(term: string, rowIndex: number) {
    const apiKey = 'qsGlZzViuao8V7ERh_EGLVaFudmqcr_ElG5JGNBArYE';
    const apiUrl = `https://api.unsplash.com/search/photos?query=${term}&client_id=${apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      const imageUrls = response.results.slice(0, 4).map((result: UnsplashResult) => result.urls.regular);

      this.imageLinkArray[rowIndex] = imageUrls;
    });
  }
}