// import { Ingredient } from './ingredient.interfaces'
export interface Dish {
  id?: number;
  name: string;
  ingredients: Ingredient[];
  rating: number;
  category: string;
  price: number;
  inventoryStatus: string;
  image: string;
}

export interface Ingredient {
  name: string;
  quantity: number;
}
