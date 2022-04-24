import { FC, ReactNode, useContext, useMemo, useState } from 'react';

import type { TCBackup, TCCategory, TCDrinks, TCFoods } from '.';
import RecipesContext from '.';

type RecipesProviderProps = { children: ReactNode | ReactNode[] };

const RecipesProvider: FC<RecipesProviderProps> = ({ children }) => {
  const [foods, setFoods] = useState<TCFoods>(() => [] as TCFoods);
  const [drinks, setDrinks] = useState<TCDrinks>(() => [] as TCDrinks);
  const [categories, setCategories] = useState<TCCategory>(() => [] as TCCategory);
  const [backup, setBackup] = useState<TCBackup>(() => [] as TCBackup);

  const value = useMemo(
    () => ({
      foods,
      setFoods,
      drinks,
      setDrinks,
      categories,
      setCategories,
      backup,
      setBackup,
    }),
    [backup, categories, drinks, foods],
  );

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export const useRecipesContext = () => useContext(RecipesContext);

export default RecipesProvider;
