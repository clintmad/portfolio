import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SKILLS } from './skills';
import { Skill } from './skill';
import { SkillService } from './skill.service';

@Component({
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  
      skills$: Observable<Skill[]>;
  
      private selectedId: string;
  
      constructor(
          private service: SkillService,
          private route: ActivatedRoute
      ) { }
  
      ngOnInit() {
          this.skills$ = this.route.paramMap
          .switchMap((params: ParamMap) => {
              this.selectedId = params.get('id');
              return this.service.getSkills();
          });
      }
  }
