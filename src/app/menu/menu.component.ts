import { Component, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish.interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  name = 'Demo';
  // selected: string  = '';

  dishes: Dish[] = [
    {
      name: 'Arroz con pollo',
      ingredients: [
        { name: 'arroz', qty: 3 },
        { name: 'pollo', qty: 2 }
      ]
    },
    {
      name: 'Escabeche de Pollo',
      ingredients: [
        { name: 'arroz', qty: 2 },
        { name: 'pollo', qty: 1 },
        { name: 'papa', qty: 5 }
      ]
    },
    {
      name: 'Ceviche',
      ingredients: [
        { name: 'limón', qty: 8 },
        { name: 'pescado', qty: 2 },
        { name: 'camote', qty: 2 }
      ]
    },
    {
      name: 'Tallarin Rojo',
      ingredients: [
        { name: 'tallarin', qty: 4 },
        { name: 'tomate', qty: 10 },
        { name: 'carne', qty: 3 }
      ]
    }
  ];

  // select(name: string): string {
  //   return this.selected = name
  // }

  constructor() { }

  ngOnInit(): void {}

}
