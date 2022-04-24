import { TDrinks, TFoods } from '../types/@types_api';

type TACC = {
  ingredient: string[];
  measure: string[];
};

export const getArray = (array: TFoods | TDrinks) =>
  Object.entries(array).reduce(
    (acc: TACC, curr) => {
      if (curr[1] === null || curr[1].trim() === '') return acc;
      if (curr[0].includes('strIngredient')) acc.ingredient.push(curr[1]);
      if (curr[0].includes('strMeasure')) acc.measure.push(curr[1]);
      return acc;
    },
    { ingredient: [], measure: [] },
  );
