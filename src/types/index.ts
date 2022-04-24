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

export type TBasePath = { pathname: '/foods' | '/drinks' };
export type TAppPath = '/foods' | '/drinks';
