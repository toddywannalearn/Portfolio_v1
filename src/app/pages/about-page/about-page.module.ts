import { AboutPageComponent } from './about-page.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
      AboutPageComponent,
    ],
    imports: [
      CommonModule,
      HttpClientModule, 
    ],
    providers: [],
  })
  export class AboutPageModule { }