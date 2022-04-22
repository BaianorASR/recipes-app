import { FC, ReactNode, useContext, useState } from 'react';
import UserContext from '.';

type UserProviderProps = {
  children: ReactNode | ReactNode[];
};

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  return (
    <UserContext.Provider value={{ email, setEmail }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
