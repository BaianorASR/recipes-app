import { FC } from 'react';

import type { TDrinks, TFoods } from '../../types/@types_api';

type CardProps = {
  index: number;
  foods?: TFoods;
  drinks?: TDrinks;
};

export const Card: FC<CardProps> = ({ index, foods, drinks }) => {
  if (foods)
    return (
      <div data-testid={`${index}-recipe-card`}>
        <img data-testid={`${index}-card-img`} src={foods.strMealThumb} alt="recipe" />
        <p data-testid={`${index}-card-name`}>{foods.strMeal}</p>
      </div>
    );

  return (
    <div data-testid={`${index}-recipe-card`}>
      <img data-testid={`${index}-card-img`} src={drinks?.strDrinkThumb} alt="recipe" />
      <p data-testid={`${index}-card-name`}>{drinks?.strDrink}</p>
    </div>
  );
};
