// import { Ingredient } from './ingredient.interfaces'

export interface Ingredient {
  name: string;
  qty: string;
}

export interface Dish {
  id: number;
  name: string;
  ingredients: Ingredient[];
  rating: number;
  category: string;
  price: number;
  inventoryStatus: string;
  image: string;
  stock: boolean;
  spicy: number;
}
