import { createContext } from 'react';

import type { TDrinks, TFoods } from '../../types/@types_api';

type TRecipesContext = {
  foods: TFoods[];
  setFoods: (param: TFoods[]) => void;
  drinks: TDrinks[];
  setDrinks: (param: TDrinks[]) => void;
  categories: { strCategory: string }[];
  setCategories: (param: { strCategory: string }[]) => void;
};

const RecipesContext = createContext<TRecipesContext>({} as TRecipesContext);

export default RecipesContext;
