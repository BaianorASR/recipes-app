import { useLocation } from 'react-router-dom';

import { MAX_CATEGORY_LENGTH } from '../../constants';
import { useRecipesContext } from '../../context/RecipesContext/RecipesProvider';
import { useFilter } from '../../hooks';
import type { TBasePath } from '../../types';

export const Categories = () => {
  const { pathname } = useLocation() as TBasePath;
  const { categories } = useRecipesContext();

  const { toggleFilter } = useFilter(pathname);

  return (
    <div>
      {categories?.slice(0, MAX_CATEGORY_LENGTH).map(({ strCategory }, i) => (
        <button
          key={i}
          data-testid={`${strCategory}-category-filter`}
          type="button"
          onClick={() => toggleFilter(strCategory)}
        >
          {strCategory}
        </button>
      ))}
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={() => toggleFilter('all')}
      >
        All
      </button>
    </div>
  );
};
