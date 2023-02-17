import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    providers: [],
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        FooterModule
    ],
    exports: [HomeComponent],
})
  export class HomeModule { }