import { useEffect } from 'react';

import Menu from '../../components/Menu';
import MainContainer from '../../Container/Main';
import { useRecipesContext } from '../../context/RecipesContext/RecipesProvider';
import { InitDrinks } from '../../services/api';

export const Drinks = () => {
  const { setDrinks } = useRecipesContext();

  useEffect(() => {
    InitDrinks().then(response => setDrinks(response.drinks));
  }, [setDrinks]);

  return (
    <MainContainer>
      <Menu />
    </MainContainer>
  );
};
