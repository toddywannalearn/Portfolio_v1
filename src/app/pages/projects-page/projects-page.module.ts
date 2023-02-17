import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsPageComponent } from './projects-page.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
      ProjectsPageComponent,
      ProjectCardComponent,
    ],
    imports: [
      CommonModule,
      HttpClientModule, 
    ],
    providers: [],
  })
  export class ProjectsPageModule { }