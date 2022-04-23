import { createContext } from 'react';

import type { TDrinks, TFoods } from '../../types/@types_api';

type TRecipesContext = {
  foods: TFoods[];
  setFoods: (param: TFoods[]) => void;
  drinks: TDrinks[];
  setDrinks: (param: TDrinks[]) => void;
  categories: string[];
  setCategories: (param: string[]) => void;
};

const RecipesContext = createContext<TRecipesContext>({} as TRecipesContext);

export default RecipesContext;
