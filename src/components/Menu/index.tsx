/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { useRecipesContext } from '../../context/RecipesContext/RecipesProvider';
import { TDrinks, TFoods } from '../../types/@types_api';
import { Card } from '../Card';

const MAX_RECIPES_COUNT = 12;

const Menu = () => {
  const { foods, drinks } = useRecipesContext();
  const { pathname } = useLocation();

  return (
    <div>
      {(pathname === '/foods' ? foods : drinks)
        ?.slice(0, MAX_RECIPES_COUNT)
        .map((recipe, i) => (
          <Card
            key={i}
            index={i}
            {...(pathname === '/foods'
              ? { foods: recipe as TFoods }
              : { drinks: recipe as TDrinks })}
          />
        ))}
    </div>
  );
};

export default memo(Menu);
