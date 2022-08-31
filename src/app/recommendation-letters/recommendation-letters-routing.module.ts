import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecommendationLettersComponent} from './containers/recommendation-letters/recommendation-letters.component';

const routes: Routes = [
  { path: '', component: RecommendationLettersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationLettersRoutingModule { }
