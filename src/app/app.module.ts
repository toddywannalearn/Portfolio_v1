import { ExperiencesPageModule } from './pages/experiences-page/experiences-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageModule } from './pages/about-page/about-page.module';
import { HomeModule } from './pages/home/home.module';
import { ProjectsPageModule } from './pages/projects-page/projects-page.module';
import { HeaderModule } from './pages/header/header.module';
import { FooterModule } from './pages/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ExperiencesPageModule,
    AboutPageModule,
    ProjectsPageModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
