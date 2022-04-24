import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import profileIcon from '../../assets/images/profileIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import { EXCLUDE, PATHS } from '../../constants';
import type { TPaths } from '../../types';
import { Search } from '../Search';
import * as S from './styles';

export const Header: FC = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const { pathname } = useLocation() as TPaths;
  const navigate = useNavigate();

  return (
    <div>
      <S.Header>
        <S.Image
          data-testid="profile-top-btn"
          src={profileIcon}
          alt="profile"
          onClick={() => navigate('/profile')}
        />
        <h1 data-testid="page-title">{PATHS[pathname]}</h1>
        {!EXCLUDE.some(
          each => pathname !== '/explore/foods/nationalities' && pathname.includes(each),
        ) && (
          <S.Image
            data-testid="search-top-btn"
            src={searchIcon}
            alt="search"
            onClick={() => setToggleSearch(!toggleSearch)}
          />
        )}
      </S.Header>
      <Search toggleSearch={toggleSearch} />
    </div>
  );
};
