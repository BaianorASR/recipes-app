import { useEffect } from 'react';

import Menu from '../../components/Menu';
import MainContainer from '../../Container/Main';
import { useRecipesContext } from '../../context/RecipesContext/RecipesProvider';
import { InitFoods } from '../../services/api';

export const Foods = () => {
  const { setFoods } = useRecipesContext();

  useEffect(() => {
    InitFoods().then(response => setFoods(response.meals));
  }, [setFoods]);

  return (
    <MainContainer>
      <Menu />
    </MainContainer>
  );
};
