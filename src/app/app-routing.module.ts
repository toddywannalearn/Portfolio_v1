import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./pages/about-page/about-page.module').then(
                (m) => m.AboutPageModule
            ),
    },
    {
        path: 'experiences',
        loadChildren: () =>
            import('./pages/experiences-page/experiences-page.module').then(
                (m) => m.ExperiencesPageModule
            ),
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./pages/projects-page/projects-page.module').then(
                (m) => m.ProjectsPageModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
