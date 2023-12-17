import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesPageComponent } from './experiences-page.component';

const routes: Routes = [
    {
        path: '',
        component: ExperiencesPageComponent,
        title: 'Experiências',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExperiencesPageRoutingModule {}
