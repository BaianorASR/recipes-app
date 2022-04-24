import { useEffect, useMemo, useState } from 'react';

import { TDrinks, TFoods } from '../types/@types_api';

export const useFetchID = (isFood: boolean, ID: string) => {
  const [foods, setFoods] = useState<TFoods>();
  const [drinks, setDrinks] = useState<TDrinks>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const URLS = {
      '/foods': `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`,
      '/drinks': `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ID}`,
    };
    fetch(URLS[isFood ? '/foods' : '/drinks'])
      .then(res => res.json())
      .then(data => {
        if (isFood) setFoods(data.meals[0] as TFoods);
        else setDrinks(data.drinks[0] as TDrinks);
        return setLoading(false);
      });
  }, [ID, isFood]);

  return useMemo(
    () => ({
      foods,
      drinks,
      isLoading,
    }),
    [drinks, foods, isLoading],
  );
};
