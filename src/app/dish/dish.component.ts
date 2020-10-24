import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dish } from '@app/models';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  private _currentDish: {};
  private _name: string;
  private _totalIngredients: number;

  private _spicy: number;


  @Input() set dish( value: Dish ) {
    // console.log('value: ', value);
    this._name = this.generateName( value.name );
    this._totalIngredients = value.ingredients.length;
    this._currentDish = value;

    this._spicy = value.spicy;
  }

  @Output() choose: EventEmitter<object> = new EventEmitter<object>();

  get name(): string {
    return this._name;
  }

  get totalIngredients(): number {
    return this._totalIngredients;
  }

  get currentDish(): {} {
    return this._currentDish;
  }

  notify(currentDish: {}): void {
    // console.log(currentDish);
    this.choose.emit(currentDish);
  }

  generateName(name: string): string {
    return `El nombre es: ${name}`;
  }

  get spicy(): number {
    return this._spicy;
  }

  spicyClass(): string {
    return this._spicy > 2 ? 'pica' : 'noPica';
  }

  constructor() { }

  ngOnInit(): void { }

}
