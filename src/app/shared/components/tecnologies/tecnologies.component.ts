import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.sass']
})
export class TecnologiesComponent implements OnInit {

  allTech = [
    'html5',
    'css3',
    'js',
    'ts',
    'nodejs',
    'php',
    'mongodb',
    'angular'
  ];

  @Input() tecnologies: string[] = [];
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.text) {
      for(let tec of this.allTech){
        if(this.text.toLowerCase().includes(tec)){
          this.tecnologies.push(tec);
        }
      }
    }
  }

}
