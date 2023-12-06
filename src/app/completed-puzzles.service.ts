import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompletedPuzzlesService {
  private localStorageKey = 'completedPuzzles';
  completedPuzzles: string[] = [];

  constructor() {
    this.loadCompletedPuzzles();
  }

  private loadCompletedPuzzles() {
    const storedPuzzles = localStorage.getItem(this.localStorageKey);

    if (storedPuzzles) {
      this.completedPuzzles = JSON.parse(storedPuzzles);
    }
  }

  private saveCompletedPuzzles() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.completedPuzzles));
  }

  addCompletedPuzzle(terms: string[]) {
    const completedPuzzle = `You completed a puzzle with the words ${terms.join(', ')}`;
    this.completedPuzzles.push(completedPuzzle);

    this.saveCompletedPuzzles();
  }

  getCompletedPuzzles(): string[] {
    return this.completedPuzzles;
  }
}
