import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PictureBoardComponent } from './picture-board/picture-board.component';
import { CompletedPuzzlesComponent } from './completed-puzzles/completed-puzzles.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'picture-board', component: PictureBoardComponent },
  { path: 'completed-puzzles', component: CompletedPuzzlesComponent },
  { path: "", component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
