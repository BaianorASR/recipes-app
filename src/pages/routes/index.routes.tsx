import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Drinks, Foods, ID, Login, Profile } from '..';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/foods/:id" element={<ID />} />
        <Route path="/drinks/:id" element={<ID />} />
        <Route path="/foods/:id/in-progress" element={<Foods />} />
        <Route path="/drinks/:id/in-progress" element={<Foods />} />
        <Route path="/explore" element={<Foods />} />
        <Route path="/explore/foods" element={<Foods />} />
        <Route path="/explore/drinks" element={<Foods />} />
        <Route path="/explore/foods/ingredients" element={<Foods />} />
        <Route path="/explore/drinks/ingredients" element={<Foods />} />
        <Route path="/explore/foods/nationalities" element={<Foods />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/done-recipes" element={<Foods />} />
        <Route path="/favorite-recipes" element={<Foods />} />
      </Routes>
    </BrowserRouter>
  );
}
