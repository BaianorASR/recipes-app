import { TRecipes } from '../../types/@types_api';

export type fetchApiResultsProps = {
  query: string;
  point: 'Ingredient' | 'Name' | 'First letter';
  path: '/foods' | '/drinks';
};

export const fetchApiResults = ({
  query,
  point,
  path,
}: fetchApiResultsProps): Promise<TRecipes> => {
  const URLS = {
    '/foods': {
      Ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
      Name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      'First letter': `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`,
    },
    '/drinks': {
      Ingredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`,
      Name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      'First letter': `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`,
    },
  };

  return fetch(URLS[path][point])
    .then(res => res.json())
    .then((data: TRecipes) => data);
};
