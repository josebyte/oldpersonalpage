import { Component, OnInit } from '@angular/core';
import RecommendationLettersES from '../../../../assets/jsonCV/recommendationLettersJosebaES.json';
import RecommendationLettersEN from '../../../../assets/jsonCV/recommendationLettersJosebaEN.json';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-recommendation-letters',
  templateUrl: './recommendation-letters.component.html',
  styleUrls: ['./recommendation-letters.component.sass']
})
export class RecommendationLettersComponent implements OnInit {

  letters: any;

  constructor(private translate: TranslateService) {
    this.letters = this.translate.currentLang === 'EN' ? RecommendationLettersEN : RecommendationLettersES;
  }

  ngOnInit(): void {
  }

}
