import React, { FC, useEffect, useState } from 'react';
import { fetchApiResults } from '../../services/api';
import type { fetchApiResultsProps } from '../../services/api';

type SearchProps = {
  toggleSearch: boolean;
};

export const Search: FC<SearchProps> = ({ toggleSearch }) => {
  const [data, setData] = useState<fetchApiResultsProps>({ query: '', point: 'Name' });

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setData(prev => ({ ...prev, [name]: value }));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchApiResults(data);
  };

  useEffect(() => {
    const { point, query } = data;
    if (point === 'First letter' && query.length > 1) {
      window.alert('Your search must have only 1 (one) character');
    }
  }, [data]);

  return (
    <>
      {toggleSearch && (
        <form onSubmit={onSubmit}>
          <input
            data-testid="search-input"
            type="text"
            name="query"
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
