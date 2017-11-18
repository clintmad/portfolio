import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsListComponent } from './skills-list.component';
import { SKILLS } from './skills';
import { Skill } from './skill';
import { SkillService } from './skill.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SkillsListComponent
    ],
    providers: [
        SkillService
    ]
})
export class SkillsModule { }