import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BriefcaseRoutingModule } from './briefcase-routing.module';
import { BriefcaseComponent } from './containers/briefcase/briefcase.component';
import { ProjectComponent } from './components/project/project.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BriefcaseComponent, ProjectComponent],
  imports: [
    CommonModule,
    BriefcaseRoutingModule,
    SharedModule
  ]
})
export class BriefcaseModule { }
