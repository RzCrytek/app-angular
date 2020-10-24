import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer.interfaces';
import { Dish } from '../interfaces/dish.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  customer: Customer;
  total = 0;

  constructor() { }

  check(dishes: Dish[]): void {
    dishes.forEach(d => this.total += d.price);
  }
}
