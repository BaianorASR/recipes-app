/* eslint-disable security/detect-object-injection */
export type fetchApiResultsProps = {
  query: string;
  point: 'Ingredient' | 'Name' | 'First letter';
};

export const fetchApiResults = ({ query, point }: fetchApiResultsProps) => {
  const URLS = {
    Ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
    Name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    'First letter': `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`,
  };

  return fetch(URLS[point])
    .then(res => res.json())
    .then(data => data);
};
