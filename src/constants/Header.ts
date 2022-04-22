export const PATHS = {
  '/foods': 'Foods',
  '/drinks': 'Drinks',
  '/explore': 'Explore',
  '/explore/foods': 'Explore Foods',
  '/explore/drinks': 'Explore Drinks',
  '/explore/foods/ingredients': 'Explore Ingredients',
  '/explore/drinks/ingredients': 'Explore Ingredients',
  '/explore/foods/nationalities': 'Explore Nationalities',
  '/profile': 'Profile',
  '/done-recipes': 'Done Recipes',
  '/favorite-recipes': 'Favorite Recipes',
};

export type TPaths = {
  pathname:
    | '/foods'
    | '/drinks'
    | '/explore'
    | '/explore/drinks'
    | '/explore/foods/ingredients'
    | '/explore/drinks/ingredients'
    | '/explore/foods/nationalities'
    | '/profile'
    | '/done-recipes'
    | '/favorite-recipes';
};

export const EXCLUDE = ['explore', 'done-recipes', 'favorite-recipes', 'profile'];
