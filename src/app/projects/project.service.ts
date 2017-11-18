import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from './project';
import { PROJECTS } from './projects';

@Injectable()
export class ProjectService {
    getProjects() {
        return Observable.of(PROJECTS);
    }
    getProject(id: string | string) {
        return this.getProjects()
        .map(projects => projects.find(project => project.id == id));
    }
}