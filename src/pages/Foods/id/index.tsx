import { useLocation } from 'react-router-dom';

export const FoodsID = () => {
  const { pathname } = useLocation();
  // const all = useParams();

  return (
    <div>
      <h1>Foods ID, {pathname}</h1>
    </div>
  );
};
