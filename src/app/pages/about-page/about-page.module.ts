import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';

@NgModule({
    declarations: [AboutPageComponent],
    imports: [CommonModule, HttpClientModule, AboutPageRoutingModule],
    providers: [],
})
export class AboutPageModule {}
