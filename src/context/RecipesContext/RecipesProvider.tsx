import { FC, ReactNode, useContext, useMemo, useState } from 'react';

import type { TDrinks, TFoods } from '../../types/@types_api';
import RecipesContext from '.';

type RecipesProviderProps = { children: ReactNode | ReactNode[] };

const RecipesProvider: FC<RecipesProviderProps> = ({ children }) => {
  const [foods, setFoods] = useState<TFoods[]>(() => [] as TFoods[]);
  const [drinks, setDrinks] = useState<TDrinks[]>(() => [] as TDrinks[]);
  const [categories, setCategories] = useState<string[]>(() => [] as string[]);

  const value = useMemo(
    () => ({
      foods,
      setFoods,
      drinks,
      setDrinks,
      categories,
      setCategories,
    }),
    [categories, drinks, foods],
  );

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export const useRecipesContext = () => useContext(RecipesContext);

export default RecipesProvider;
