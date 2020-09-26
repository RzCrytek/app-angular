import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dish } from '../interfaces/dish.interfaces';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  private _name: string;
  private _totalIngredients: number;


  @Input() set dish( value: Dish ) {
    this._name = this.generateName( value.name );
    this._totalIngredients = value.ingredients.length;
  }

  @Output() choose: EventEmitter<string> = new EventEmitter<string>();

  get name(): string {
    return this._name;
  }

  get totalIngredients(): number {
    return this._totalIngredients;
  }

  notify(name: string): void {
    console.log(name);
    this.choose.emit(name);
  }

  generateName(name: string): string {
    return `El nombre es: ${name}`;
  }

  constructor() { }

  ngOnInit(): void { }

}
