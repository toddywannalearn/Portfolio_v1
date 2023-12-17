import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { ProjectsPageComponent } from './projects-page.component';

@NgModule({
    declarations: [ProjectsPageComponent, ProjectCardComponent],
    imports: [CommonModule, HttpClientModule, ProjectsPageRoutingModule],
    providers: [],
})
export class ProjectsPageModule {}
