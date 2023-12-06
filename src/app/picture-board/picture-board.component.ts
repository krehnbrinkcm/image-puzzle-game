import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunicationService } from '../communication.service';
import { CompletedPuzzlesService } from '../completed-puzzles.service';
import { Router } from '@angular/router';

interface ImageObject {
  url: string;
  selected: boolean;
  dimmed: boolean;
  searchTerm: string;
}

@Component({
  selector: 'app-picture-board',
  templateUrl: './picture-board.component.html',
  styleUrls: ['./picture-board.component.css'],
})
export class PictureBoardComponent implements OnInit {
  model: any = {};
  imageLinkArray: ImageObject[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private communicationService: CommunicationService,
    private completedPuzzlesService: CompletedPuzzlesService
  ) { }

  ngOnInit() {
    this.model = {
      imageTerm1: this.communicationService.getImageTerms()[0],
      imageTerm2: this.communicationService.getImageTerms()[1],
      imageTerm3: this.communicationService.getImageTerms()[2],
      imageTerm4: this.communicationService.getImageTerms()[3],
    };
    this.startImageSearch();
  }



  searchUnsplash(term: string, rowIndex: number) {
    const apiKey = 'qsGlZzViuao8V7ERh_EGLVaFudmqcr_ElG5JGNBArYE';
    const apiUrl = `https://api.unsplash.com/search/photos?query=${term}&client_id=${apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      const imageUrls = response.results
        .slice(0, 4)
        .map((result: any) => result.urls.regular);


      imageUrls.forEach((url: string) => {
        this.imageLinkArray.push({ url, selected: false, dimmed: false, searchTerm: term });
      });

      this.imageLinkArray = this.shuffleImages(this.imageLinkArray);
    });
  }



  startImageSearch() {
    const imageTerms = this.communicationService.getImageTerms();

    imageTerms.forEach((term, index) => {
      this.searchUnsplash(term, index);
    });

    this.imageLinkArray = this.shuffleImages(this.imageLinkArray);
  }

  shuffleImages(images: ImageObject[]): ImageObject[] {
    let currentIndex = images.length;
    let randomIndex, tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = tempValue;
    }

    return images;
  }

  toggleSelection(image: ImageObject) {
    image.selected = !image.selected;
    image.dimmed = image.selected;

    if (this.isSetComplete()) {
      this.removeSet();
    }

    if (this.allImagesRemoved()) {
      const completedTerms = [
        this.model.imageTerm1,
        this.model.imageTerm2,
        this.model.imageTerm3,
        this.model.imageTerm4,
      ];

      this.completedPuzzlesService.addCompletedPuzzle(completedTerms);
      this.router.navigate(['/completed-puzzles']);
    }
  }

  private allImagesRemoved(): boolean {
    return this.imageLinkArray.flat().every(image => image.url === '');
  }

  isSetComplete(): boolean {
    const selectedImages = this.imageLinkArray.filter(image => image.selected);
    return selectedImages.length === 4;
  }

  removeSet() {
    const selectedImages = this.imageLinkArray.filter(image => image.selected);


    if (selectedImages.length === 4) {

      const searchTermOfSelectedImages = selectedImages[0].searchTerm;


      if (selectedImages.every(image => image.searchTerm === searchTermOfSelectedImages)) {

        this.imageLinkArray = this.imageLinkArray.filter(image => !image.selected);

        this.imageLinkArray = this.shuffleImages(this.imageLinkArray);
      }
    }
  }


  getRowIndices(): number[] {
    const numRows = Math.ceil(this.imageLinkArray.length / 4);
    return Array.from({ length: numRows }, (_, index) => index);
  }

}
