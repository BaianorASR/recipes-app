import { createContext, Dispatch, SetStateAction } from 'react';

import type { TRecipes } from '../../types/@types_api';

type TRecipesContext = {
  recipes: TRecipes | [];
  setRecipes: Dispatch<SetStateAction<TRecipes>>;
};

const RecipesContext = createContext<TRecipesContext>({} as TRecipesContext);

export default RecipesContext;
