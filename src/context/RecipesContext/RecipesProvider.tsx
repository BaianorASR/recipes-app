import { FC, ReactNode, useContext, useMemo, useState } from 'react';

import RecipesContext from '.';

import type { TRecipes } from '../../types/@types_api';

type RecipesProviderProps = { children: ReactNode | ReactNode[] };

const RecipesProvider: FC<RecipesProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<TRecipes>(() => [] as unknown as TRecipes);

  const value = useMemo(
    () => ({
      recipes,
      setRecipes,
    }),
    [recipes],
  );

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export const useRecipesContext = () => useContext(RecipesContext);

export default RecipesProvider;
