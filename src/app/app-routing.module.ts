
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ExperiencesPageComponent } from './pages/experiences-page/experiences-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsPageComponent, title: 'Douglas Portfolio - My Projects'},
  {path: 'experiences', component: ExperiencesPageComponent, title: 'Douglas Portfolio - My Experiences'},
  {path: '', component: AboutPageComponent, title: 'Douglas Portfolio - About me'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
