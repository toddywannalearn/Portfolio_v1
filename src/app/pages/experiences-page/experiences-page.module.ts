import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ExperiencesPageRoutingModule } from './experiences-page-routing.module';
import { ExperiencesPageComponent } from './experiences-page.component';
import { ExperiencesService } from './experiences.service';

@NgModule({
    declarations: [ExperiencesPageComponent],
    imports: [CommonModule, HttpClientModule, ExperiencesPageRoutingModule],
    providers: [ExperiencesService],
})
export class ExperiencesPageModule {}
