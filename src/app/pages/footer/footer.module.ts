import { FooterComponent } from './footer.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
      FooterComponent,
    ],
    imports: [
      CommonModule,
    ],
    providers: [],
    exports: [FooterComponent],
  })
  export class FooterModule { }