import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';

const routes: Routes =[
    {path: '', redirectTo:'../chirp-form', pathMatch:'full'},
    {path: 'chirp-form', component: ChirpFormComponent},
    {path: 'list', component: ListComponent},
    {path: 'single', component: SingleComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}