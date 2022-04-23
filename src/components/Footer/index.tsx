import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import DrinkIcon from '../../assets/images/drinkIcon.svg';
import ExploreIcon from '../../assets/images/exploreIcon.svg';
import FoodIcon from '../../assets/images/mealIcon.svg';
import * as S from './styles';

export const Footer: FC = () => {
  const oi = 'BAIANOR'; // eslint-disable-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  return (
    <S.Footer data-testid="footer">
      <S.Img
        data-testid="drinks-bottom-btn"
        src={DrinkIcon}
        alt="drinks-icon"
        onClick={() => navigate('/drinks')}
      />
      <S.Img
        data-testid="explore-bottom-btn"
        src={ExploreIcon}
        alt="explore-icon"
        onClick={() => navigate('/explore')}
      />
      <S.Img
        data-testid="food-bottom-btn"
        src={FoodIcon}
        alt="food-icon"
        onClick={() => navigate('/foods')}
      />
    </S.Footer>
  );
};
