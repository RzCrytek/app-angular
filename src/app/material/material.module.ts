import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MenuMaterialComponent } from './menu-material/menu-material.component';
import { ContactComponent } from './contact/contact.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { MaterialAllModule } from '../material-all.module';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuMaterialComponent,
    ContactComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    HolaMundoComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MaterialAllModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
