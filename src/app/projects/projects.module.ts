import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { PROJECTS } from './projects';
import { Project } from './project';
import { ProjectService } from './project.service';

import { ProjectRoutingModule } from './projects-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule
    ],
    declarations: [
        ProjectListComponent,
        ProjectDetailComponent
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectsModule { }
