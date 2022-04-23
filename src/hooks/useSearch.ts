import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { myAlert } from '../helpers';
import { fetchApiResultsProps } from '../services/api';
import { useFetch } from './useFetch';

export const useSearch = () => {
  const { pathname } = useLocation() as { pathname: '/foods' | '/drinks' };

  const { Drinks, Foods } = useFetch();

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
      return pathname === '/drinks' ? Drinks(data, pathname) : Foods(data, pathname);
    },
    [Drinks, Foods, data, pathname],
  );

  useEffect(() => {
    const { point, query } = data;
    if (point === 'First letter' && query.length > 1) {
      myAlert('Your search must have only 1 (one) character');
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
