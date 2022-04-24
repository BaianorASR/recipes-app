import { createContext } from 'react';

import type {
  TCategoryDrinksResponse,
  TCategoryFoodsResponse,
  TDrinks,
  TFoods,
} from '../../types/@types_api';

export type TCFoods = TFoods[] | TCategoryFoodsResponse;
export type TCDrinks = TDrinks[] | TCategoryDrinksResponse;
export type TCCategory = { strCategory: string }[];
export type TCBackup = TCFoods | TCDrinks;

type TRecipesContext = {
  foods: TCFoods;
  setFoods: (param: TCFoods) => void;
  drinks: TCDrinks;
  setDrinks: (param: TCDrinks) => void;
  categories: TCCategory;
  setCategories: (param: TCCategory) => void;
  backup: TCBackup;
  setBackup: (param: TCBackup) => void;
};

const RecipesContext = createContext<TRecipesContext>({} as TRecipesContext);

export default RecipesContext;
