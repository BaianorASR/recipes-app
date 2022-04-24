import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { TCDrinks, TCFoods } from '../context/RecipesContext';
import { useRecipesContext } from '../context/RecipesContext/RecipesProvider';
import { fetchCat } from '../services/api';
import { TDrinksCat, TFoodsCat } from '../types/@types_api';

export const useFilter = (path: '/foods' | '/drinks') => {
  const actual = useRef<string>('');
  const { backup, setFoods, setDrinks } = useRecipesContext();
  const [filter, setFilter] = useState<string>('all');

  const toggleFilter = useCallback(
    (value: string) => {
      if (value === 'all' && filter !== 'all') {
        actual.current = 'all';
        setFilter('all');
        return;
      }
      if (filter === value) {
        actual.current = 'all';
        setFilter('all');
        return;
      }
      setFilter(value);
    },
    [filter],
  );

  const save = useCallback(
    (value: string) => {
      const isFood = path === '/foods';
      if (isFood) {
        fetchCat<TFoodsCat>(value, path).then(data => setFoods(data.meals));
      } else {
        fetchCat<TDrinksCat>(value, path).then(data => setDrinks(data.drinks));
      }
    },
    [path, setDrinks, setFoods],
  );

  const reset = useCallback(() => {
    const isFood = path === '/foods';
    if (isFood) return setFoods(backup as TCFoods);
    return setDrinks(backup as TCDrinks);
  }, [backup, path, setDrinks, setFoods]);

  useEffect(() => {
    if (filter === actual.current) reset();
    if (filter !== 'all') save(filter);
  }, [filter, reset, save]);

  return useMemo(
    () => ({
      toggleFilter,
    }),
    [toggleFilter],
  );
};
