import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PictureBoardComponent } from './picture-board/picture-board.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'picture-board', component: PictureBoardComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
