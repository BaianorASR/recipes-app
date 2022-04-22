import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { EXCLUDE, PATHS } from '../../constants/Header';
import { Search } from '../Search';
import * as S from './styles';

import type { TPaths } from '../../constants/Header';

export const Header: FC = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const { pathname } = useLocation() as TPaths;
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <S.Image
          data-testid="profile-top-btn"
          src="src/images/profileIcon.svg"
          alt="profile"
          onClick={() => navigate('/profile')}
        />
        <h1 data-testid="page-title">{PATHS[pathname]}</h1>
        {!EXCLUDE.some(
          each => pathname !== '/explore/foods/nationalities' && pathname.includes(each),
        ) && (
          <S.Image
            data-testid="search-top-btn"
            src="src/images/searchIcon.svg"
            alt="search"
            onClick={() => setToggleSearch(!toggleSearch)}
          />
        )}
      </header>
      <Search toggleSearch={toggleSearch} />
    </div>
  );
};
