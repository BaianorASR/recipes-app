import { useLocation } from 'react-router-dom';

export const DrinksID = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>{pathname}</h1>
    </div>
  );
};
