import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  imageTerms: string[] = [];

  setImageTerms(terms: string[]) {
    this.imageTerms = terms;
  }

  getImageTerms() {
    return this.imageTerms;
  }
}
