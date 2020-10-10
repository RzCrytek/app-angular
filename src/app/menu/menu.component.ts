import { Component, OnInit } from '@angular/core';
import { Dish } from '@app/models';
import * as dishesJson from '@app/data/dishes.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  name = 'Demo';
  selected = '';

  dishes: Dish;

  constructor() {
    this.dishes = dishesJson.default;
    console.log(this.dishes);
  }

  ngOnInit(): void {}

  select(currentDish: Dish): string {
    console.log('select:', currentDish);

    const currentIngredients: number = currentDish.ingredients.length;

    console.log('ingredients:', currentIngredients);

    return this.selected = `${currentDish.name} y tiene ${currentIngredients} ingredientes`;

  }

}
