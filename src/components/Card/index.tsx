import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import type { TDrinks, TFoods } from '../../types/@types_api';

type CardProps = {
  index: number;
  foods?: TFoods;
  drinks?: TDrinks;
};

export const Card: FC<CardProps> = ({ index, foods, drinks }) => {
  const navigate = useNavigate();

  if (foods)
    return (
      <div
        data-testid={`${index}-recipe-card`}
        role="presentation"
        onClick={() => navigate(`/foods/${foods.idMeal}`)}
      >
        <img data-testid={`${index}-card-img`} src={foods.strMealThumb} alt="recipe" />
        <p data-testid={`${index}-card-name`}>{foods.strMeal}</p>
      </div>
    );

  return (
    <div
      data-testid={`${index}-recipe-card`}
      role="presentation"
      onClick={() => navigate(`/drinks/${drinks?.idDrink}`)}
    >
      <img data-testid={`${index}-card-img`} src={drinks?.strDrinkThumb} alt="recipe" />
      <p data-testid={`${index}-card-name`}>{drinks?.strDrink}</p>
    </div>
  );
};
