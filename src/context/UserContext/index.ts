import { createContext } from 'react';

type TUserContext = {
  email: string;
  setEmail: (email: string) => void;
};

const UserContext = createContext<TUserContext>({} as TUserContext);

export default UserContext;
