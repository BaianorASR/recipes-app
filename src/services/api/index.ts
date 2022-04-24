import { TAppPath } from '../../types';
import type { TResponseDrinks, TResponseFoods } from '../../types/@types_api';

export type fetchApiResultsProps = {
  query: string;
  point: 'Ingredient' | 'Name' | 'First letter';
  path: '/foods' | '/drinks';
};

export type TResponseCategories = Record<'meals' | 'drinks', { strCategory: string }>;

// export const fetchAPI = <T>({ path, query, point }: fetchApiResultsProps) => {
//   const URLS = {
//     '/foods': {
//       Ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
//       Name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
//       'First letter': `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`,
//     },
//     '/drinks': {
//       Ingredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`,
//       Name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
//       'First letter': `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`,
//     },
//   };

//   return fetch(URLS[path][point])
//     .then(res => res.json())
//     .then((data: T) => data);
// };

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

export const InitData = <T, C>(path: TAppPath): Promise<[Awaited<T>, Awaited<C>]> => {
  const URLS = {
    '/foods': {
      res: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      cat: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    },
    '/drinks': {
      res: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      cat: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    },
  };

  const response = fetch(URLS[path].res)
    .then(res => res.json())
    .then((data: T) => data);

  const categories = fetch(URLS[path].cat)
    .then(res => res.json())
    .then((data: C) => data);

  return Promise.all([response, categories]);
};

export const fetchCat = <T>(query: string, path: TAppPath) => {
  const URLS = {
    '/foods': `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`,
    '/drinks': `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${query}`,
  };
  return fetch(URLS[path])
    .then(res => res.json())
    .then((data: T) => data);
};
