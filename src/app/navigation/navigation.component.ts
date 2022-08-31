import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import CVJoseba from '../../assets/jsonCV/josebaES.json';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  cv: any;

  constructor(
    public translate: TranslateService
  ) {
    this.cv = CVJoseba;
    console.log(this.cv);
  }

  ngOnInit(): void {
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }

}
