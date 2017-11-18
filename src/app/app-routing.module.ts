import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
    { path: '', component: ProjectListComponent, outlet: 'project' },
    { path: '', component: SkillsListComponent, outlet: 'skillsList' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                preloadingStrategy: SelectivePreloadingStrategy
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        SelectivePreloadingStrategy
    ]
})

export class AppRoutingModule { }