/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { MAX_RECIPES_TO_SHOW } from '../../constants';
import { useRecipesContext } from '../../context/RecipesContext/RecipesProvider';
import { Categories } from '../../core/Categories';
import { TDrinks, TFoods } from '../../types/@types_api';
import { Card } from '../Card';

const Menu = () => {
  const { foods, drinks } = useRecipesContext();
  const { pathname } = useLocation();

  return (
    <div>
      <div>
        <Categories />
      </div>
      <div>
        {(pathname === '/foods' ? foods : drinks)
          ?.slice(0, MAX_RECIPES_TO_SHOW)
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
    </div>
  );
};

export default memo(Menu);
