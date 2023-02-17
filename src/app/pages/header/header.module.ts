import { HeaderComponent } from './header.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
      HeaderComponent,
    ],
    imports: [
      CommonModule,
    ],
    providers: [],
    exports: [HeaderComponent],
  })
  export class HeaderModule { }