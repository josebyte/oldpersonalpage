import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
  { path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
  { path: 'briefcase', loadChildren: () => import('./briefcase/briefcase.module').then(m => m.BriefcaseModule) },
  { path: 'letters', loadChildren: () => import('./recommendation-letters/recommendation-letters.module').then(m => m.RecommendationLettersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
