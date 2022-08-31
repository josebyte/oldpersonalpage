import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationLettersRoutingModule } from './recommendation-letters-routing.module';
import { RecommendationLettersComponent } from './containers/recommendation-letters/recommendation-letters.component';


@NgModule({
  declarations: [RecommendationLettersComponent],
  imports: [
    CommonModule,
    RecommendationLettersRoutingModule
  ]
})
export class RecommendationLettersModule { }
