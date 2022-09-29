import { RouterModule, Routes } from '@angular/router';

import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Douglas Portfolio - About me'},
  {path: 'projects', component: ProjectsPageComponent, title: 'Douglas Portfolio - My Projects'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
