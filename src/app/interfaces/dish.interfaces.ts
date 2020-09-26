// import { Ingredient } from './ingredient.interfaces'
export interface Dish {
  name: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  qty: number;
}
