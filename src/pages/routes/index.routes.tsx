import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Drinks, DrinksID, Foods, FoodsID, Login } from '..';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/foods/:id" element={<FoodsID />} />
        <Route path="/drinks/:id" element={<DrinksID />} />
        <Route path="/foods/:id/in-progress" element={<Foods />} />
        <Route path="/drinks/:id/in-progress" element={<Foods />} />
        <Route path="/explore" element={<Foods />} />
        <Route path="/explore/foods" element={<Foods />} />
        <Route path="/explore/drinks" element={<Foods />} />
        <Route path="/explore/foods/ingredients" element={<Foods />} />
        <Route path="/explore/drinks/ingredients" element={<Foods />} />
        <Route path="/explore/foods/nationalities" element={<Foods />} />
        <Route path="/profile" element={<Foods />} />
        <Route path="/done-recipes" element={<Foods />} />
        <Route path="/favorite-recipes" element={<Foods />} />
      </Routes>
    </BrowserRouter>
  );
}
