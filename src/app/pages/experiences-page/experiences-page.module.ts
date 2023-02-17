import { ExperiencesService } from './experiences.service';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ExperiencesPageComponent } from "./experiences-page.component";

@NgModule({
    declarations: [
      ExperiencesPageComponent,
    ],
    imports: [
      CommonModule,
      HttpClientModule, 
    ],
    providers: [ ExperiencesService ],
  })
  export class ExperiencesPageModule { }