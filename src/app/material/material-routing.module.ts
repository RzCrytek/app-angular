import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuMaterialComponent } from './menu-material/menu-material.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    component: MenuMaterialComponent,
    children: [
      { path: '', redirectTo: 'material-dashboard', pathMatch: 'full' },
      { path: 'contacto', component: ContactComponent },
      { path: 'material-table', component: TableComponent },
      { path: 'material-dashboard', component: DashboardComponent },
      { path: 'material-tree', component: TreeComponent  },
      { path: '**', redirectTo: 'material-menu'  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
