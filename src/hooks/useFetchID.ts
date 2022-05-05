import { useEffect, useMemo, useState } from 'react';

import { fetchID } from '../services/api';
import { TDrinks, TFoods } from '../types/@types_api';

export const useFetchID = (isFood: boolean, ID: string) => {
  const [foods, setFoods] = useState<TFoods>();
  const [drinks, setDrinks] = useState<TDrinks>();
  const [recommendation, setRecommendation] = useState<TFoods[] | TDrinks[]>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchID(isFood, ID).then(([response, reco]) => {
      (isFood ? setFoods : setDrinks)(response[isFood ? 'meals' : 'drinks'][0]);
      setRecommendation(Object.values(reco)[0] as TFoods[] | TDrinks[]);
      setLoading(false);
    });
  }, [ID, isFood]);

  return useMemo(
    () => ({
      foods,
      drinks,
      recommendation,
      isLoading,
    }),
    [drinks, foods, isLoading, recommendation],
  );
};

// if (isFood) setFoods(data.meals[0] as TFoods);
// else setDrinks(data.drinks[0] as TDrinks);
// return setLoading(false);
