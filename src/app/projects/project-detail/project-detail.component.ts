import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PROJECTS } from '../projects';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
    templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

    project$: Observable<Project>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService
    ) { }

    ngOnInit() {
        this.project$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getProject(params.get('id')));
    }

    gotoHome() {        
        this.router.navigate([''])
    }
}