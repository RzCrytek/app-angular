import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  { path: '', redirectTo: 'material-menu', pathMatch: 'full' },
  { path: 'countries', component: CountriesComponent },
  { path: 'dish', component: DishComponent },
  { path: 'material-menu', loadChildren: './material/material.module#MaterialModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
