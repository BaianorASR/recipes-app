import { TDrinks, TFoods } from '../../types/@types_api';

export type fetchApiResultsProps = {
  query: string;
  point: 'Ingredient' | 'Name' | 'First letter';
  path: '/foods' | '/drinks';
};

type TResponseFoods = { meals: TFoods[] };
type TResponseDrinks = { drinks: TDrinks[] };

export function fetchFoods({
  query,
  point,
}: fetchApiResultsProps): Promise<TResponseFoods> {
  const URLS = {
    Ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
    Name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    'First letter': `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`,
  };

  return fetch(URLS[point])
    .then(res => res.json())
    .then((data: TResponseFoods) => data);
}

export function fetchDrinks({
  query,
  point,
}: fetchApiResultsProps): Promise<TResponseDrinks> {
  const URLS = {
    Ingredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`,
    Name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
    'First letter': `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`,
  };

  return fetch(URLS[point])
    .then(res => res.json())
    .then((data: TResponseDrinks) => data);
}

export const InitFoods = (): Promise<TResponseFoods> =>
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then((data: TResponseFoods) => data);

export const InitDrinks = (): Promise<TResponseDrinks> =>
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then((data: TResponseDrinks) => data);
