import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { inhabitantSelectedComponent } from './../inhabitant-selected/inhabitant-selected.component';

const routes: Routes = [
  { path: 'inhabitants/:id', component: inhabitantSelectedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
