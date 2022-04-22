import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { fetchApiResults, fetchApiResultsProps } from '../services/api';

export const useSearch = () => {
  const { pathname } = useLocation() as { pathname: '/foods' | '/drinks' };
  const navigate = useNavigate();
  const [data, setData] = useState<fetchApiResultsProps>({
    query: '',
    point: 'Name',
    path: pathname,
  });

  const handleChange = useCallback(
    ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) =>
      setData(prev => ({ ...prev, [name]: value })),
    [],
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      fetchApiResults(data).then(res => {
        const key = pathname === '/drinks' ? 'drinks' : 'meals';
        console.log(res);
        if (res[key].length === 1) {
          navigate(`${pathname}/${res[key][0][key === 'drinks' ? 'idDrink' : 'idMeal']}`);
        }
      });
    },
    [data, navigate, pathname],
  );

  useEffect(() => {
    const { point, query } = data;
    if (point === 'First letter' && query.length > 1) {
      const global = globalThis;
      global.alert('Your search must have only 1 (one) character');
    }
  }, [data]);

  return useMemo(
    () => ({
      handleChange,
      onSubmit,
      value: data.query,
    }),
    [data, handleChange, onSubmit],
  );
};
