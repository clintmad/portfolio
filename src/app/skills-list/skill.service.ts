import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Skill } from './skill';
import { SKILLS } from './skills';

@Injectable()
export class SkillService {
    getSkills() {
        return Observable.of(SKILLS);
    }
    getSkill(id: string | string) {
        return this.getSkills()
        .map(skills => skills.find(skill => skill.id == id));
    }
}