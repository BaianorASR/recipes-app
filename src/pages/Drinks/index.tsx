import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Menu from '../../components/Menu';
import MainContainer from '../../Container/Main';
import { useRecipesContext } from '../../context/RecipesContext/RecipesProvider';
import { InitData } from '../../services/api';
import type { TCategoryDrinks, TResponseDrinks } from '../../types/@types_api';

export const Drinks = () => {
  const { setDrinks, setCategories } = useRecipesContext();
  const { pathname } = useLocation() as { pathname: '/drinks' };

  useEffect(() => {
    InitData<TResponseDrinks, TCategoryDrinks>(pathname).then(([res, cat]) => {
      setDrinks(res.drinks);
      setCategories(cat.drinks);
    });
  }, [pathname, setCategories, setDrinks]);

  return (
    <MainContainer>
      <Menu />
    </MainContainer>
  );
};
