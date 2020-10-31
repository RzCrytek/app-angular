import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'dish', component: DishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
