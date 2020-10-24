import { Component, OnInit } from '@angular/core';
import { Customer, Dish } from '@app/models';
import * as dishesJson from '@app/data/dishes.json';
import { MenuService } from '../utils/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  name = 'Demo';

  selected = '';
  dishes: Dish[];

  orders: Dish[] = [];

  constructor(public menuService: MenuService) {
    this.dishes = dishesJson.dishes;
    // console.log(this.dishes);
    // console.log('json:', dishesJson);
    // console.log('json2:', dishesJson.dishes);
  }

  ngOnInit(): void {}

  select(currentDish: Dish): string {
    console.log('select:', currentDish);

    const currentIngredients: number = currentDish.ingredients.length;

    // console.log('ingredients:', currentIngredients);

    this.orders.push(currentDish);
    this.menuService.check(this.orders);

    return this.selected = `${currentDish.name} y tiene ${currentIngredients} ingredientes`;

  }

  show(value: boolean): string {
    return value ? 'block' : 'none';
  }

  validateStock(value: boolean): string {
    return value ? 'stock' : 'noStock';
  }

  send(name: string): void {
    const customer: Customer = {
      name,
      level: 'regular'
    }

    this.menuService.customer = customer;
  }

}
