import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PROJECTS } from '../projects';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

    projects$: Observable<Project[]>;

    private selectedId: string;

    constructor(
        private service: ProjectService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.projects$ = this.route.paramMap
        .switchMap((params: ParamMap) => {
            this.selectedId = params.get('id');
            return this.service.getProjects();
        });
    }
}