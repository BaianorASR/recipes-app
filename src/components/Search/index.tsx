import React, { FC } from 'react';

import { useSearch } from '../../hooks';

type SearchProps = {
  toggleSearch: boolean;
};

export const Search: FC<SearchProps> = ({ toggleSearch }) => {
  const { value, handleChange, onSubmit } = useSearch();

  return (
    <>
      {toggleSearch && (
        <form onSubmit={onSubmit}>
          <input
            data-testid="search-input"
            type="text"
            name="query"
            value={value}
            onChange={handleChange}
          />
          <div>
            <label htmlFor="ingredient">
              Ingredient
              <input
                data-testid="ingredient-search-radio"
                type="radio"
                id="ingredient"
                value="Ingredient"
                name="point"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="search">
              Name
              <input
                data-testid="name-search-radio"
                type="radio"
                id="search"
                value="Name"
                name="point"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="letter">
              First letter
              <input
                data-testid="first-letter-search-radio"
                type="radio"
                id="letter"
                value="First letter"
                name="point"
                onChange={handleChange}
              />
            </label>
          </div>
          <button data-testid="exec-search-btn" type="submit">
            Search
          </button>
        </form>
      )}
    </>
  );
};
