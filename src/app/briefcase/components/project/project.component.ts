import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  @Input() project: any;
  url: SafeResourceUrl | undefined;

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + this.project.youtubevideo);
  }

}
