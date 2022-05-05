import { FC } from 'react';

import { getArray } from '../../helpers/getArray';
import { TDrinks } from '../../types/@types_api';

type InfoDrinksProps = { drinks: TDrinks };

export const InfoDrinks: FC<InfoDrinksProps> = ({ drinks }) => {
  const { ingredient, measure } = getArray(drinks);
  return (
    <div>
      <div>
        <img
          data-testid="recipe-photo"
          src={drinks?.strDrinkThumb}
          alt="thumb"
          width={300}
        />
        <p data-testid="recipe-title">{drinks?.strDrink}</p>
        <button data-testid="share-btn" type="button">
          share
        </button>
        <button data-testid="favorite-btn" type="button">
          Favorite
        </button>
        <p data-testid="recipe-category">{drinks?.strAlcoholic}</p>
        <ul>
          {ingredient.map((each, i) => (
            <li key={i} data-testid={`${i}-ingredient-name-and-measure`}>
              {`${each} - ${measure[i]}`}
            </li>
          ))}
        </ul>
        <p data-testid="instructions">{drinks?.strInstructions}</p>

        <div data-testid={`${0}-recomendation-card`}>recommendation</div>
        <button data-testid="start-recipe-btn" type="button">
          start
        </button>
      </div>
    </div>
  );
};
