import { Component, OnInit } from '@angular/core';
import Briefcase from '../../../../assets/jsonCV/briefcaseJosebaES.json';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.sass']
})
export class BriefcaseComponent implements OnInit {

  briefcase;

  constructor() {
    this.briefcase = Briefcase;
  }

  ngOnInit(): void {
  }

}
