import { Component } from '@angular/core';
import { CompletedPuzzlesService } from '../completed-puzzles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-puzzles',
  templateUrl: './completed-puzzles.component.html',
  styleUrls: ['./completed-puzzles.component.css'],
})
export class CompletedPuzzlesComponent {
  completedPuzzles: string[];

  constructor(private router: Router, private completedPuzzlesService: CompletedPuzzlesService,) {
    this.completedPuzzles = this.completedPuzzlesService.getCompletedPuzzles();
  }
}
