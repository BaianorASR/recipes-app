import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Menu from '../../components/Menu';
import MainContainer from '../../Container/Main';
import { useRecipesContext } from '../../context/RecipesContext/RecipesProvider';
import { InitData } from '../../services/api';
import { TCategoryFoods, TResponseFoods } from '../../types/@types_api';

export const Foods = () => {
  const { setFoods, setCategories } = useRecipesContext();
  const { pathname } = useLocation() as { pathname: '/drinks' };

  useEffect(() => {
    InitData<TResponseFoods, TCategoryFoods>(pathname).then(([res, cat]) => {
      setFoods(res.meals);
      setCategories(cat.meals);
    });
  }, [pathname, setCategories, setFoods]);

  return (
    <MainContainer>
      <Menu />
    </MainContainer>
  );
};
