import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DishComponent } from './dish/dish.component';
import { CountriesComponent } from './countries/countries.component';

import { EmptyPipe, FilesizePipe, SelectedishPipe } from '@app/pipes';
import { BoxShadowDirective } from './directives/box-shadow.directive';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './countries/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    DishComponent,
    CountriesComponent,
    FilesizePipe,
    EmptyPipe,
    SelectedishPipe,
    BoxShadowDirective,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
