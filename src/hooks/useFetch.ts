import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRecipesContext } from '../context/RecipesContext/RecipesProvider';
import { myAlert } from '../helpers';
import { fetchApiResultsProps, fetchDrinks, fetchFoods } from '../services/api';

type P = '/drinks' | '/foods';
type Q = fetchApiResultsProps;

export const useFetch = () => {
  const navigate = useNavigate();
  const { setDrinks, setFoods } = useRecipesContext();

  const Foods = useCallback(
    (query: Q, path: P) => {
      fetchFoods(query).then(({ meals }) => {
        if (!meals)
          return myAlert("Sorry, we haven't found any recipes for these filters.");
        if (meals.length === 1) navigate(`${path}/${meals[0].idMeal}`);
        return setFoods(meals);
      });
    },
    [navigate, setFoods],
  );

  const Drinks = useCallback(
    (query: Q, path: P) => {
      fetchDrinks(query).then(({ drinks }) => {
        if (!drinks)
          return myAlert("Sorry, we haven't found any recipes for these filters.");
        if (drinks.length === 1) navigate(`${path}/${drinks[0].idDrink}`);
        return setDrinks(drinks);
      });
    },
    [navigate, setDrinks],
  );

  return useMemo(
    () => ({
      Drinks,
      Foods,
    }),
    [Drinks, Foods],
  );
};
