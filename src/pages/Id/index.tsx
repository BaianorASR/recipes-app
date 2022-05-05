import { useLocation, useParams } from 'react-router-dom';

import { InfoDrinks } from '../../core/InfoDrinks';
import { getArray } from '../../helpers/getArray';
import { useFetchID } from '../../hooks';
import { TBasePath } from '../../types';
import { TFoods } from '../../types/@types_api';

export const ID = () => {
  const { pathname } = useLocation() as TBasePath;
  const isFood = pathname.includes('/foods');
  const { id } = useParams() as { id: string };
  const { drinks, foods, isLoading, recommendation } = useFetchID(isFood, id);
  if (isLoading) return <p>loading...</p>;

  if (drinks) return <InfoDrinks drinks={drinks} />;

  const { ingredient, measure } = getArray(foods as TFoods);
  return (
    <div>
      <div>
        <img
          data-testid="recipe-photo"
          src={foods?.strMealThumb}
          alt="thumb"
          width={300}
        />
        <p data-testid="recipe-title">{foods?.strMeal}</p>
        <button data-testid="share-btn" type="button">
          share
        </button>
        <button data-testid="favorite-btn" type="button">
          Favorite
        </button>
        <p data-testid="recipe-category">{foods?.strCategory}</p>
        <ul>
          {ingredient.map((each, i) => (
            <li key={i} data-testid={`${i}-ingredient-name-and-measure`}>
              {`${each} - ${measure[i]}`}
            </li>
          ))}
        </ul>
        <p data-testid="instructions">{foods?.strInstructions}</p>

        <iframe
          data-testid="video"
          width="420"
          height="315"
          src={foods?.strYoutube.replace('watch?', 'embed/')}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <div data-testid={`${0}-recomendation-card`}>
          {recommendation?.slice(0, 6).map((each, i) => (
            <div key={i}>
              <div>{each[isFood ? 'idMeal' : 'idDrink']}</div>
            </div>
          ))}
        </div>
        <button data-testid="start-recipe-btn" type="button">
          start
        </button>
      </div>
    </div>
  );
};
