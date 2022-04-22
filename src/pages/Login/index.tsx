import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../Container';
import { loginValidation } from '../../helpers/loginValidation';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const DEFAULT_TOKEN = 1;

type LSEmail = {
  email: string;
};

export const Login = () => {
  const [user, serUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  const [, setMealsToken] = useLocalStorage<number>('mealsToken', DEFAULT_TOKEN);
  const [, setCocktailsToken] = useLocalStorage<number>('cocktailsToken', DEFAULT_TOKEN);
  const [, setEmail] = useLocalStorage<LSEmail>('user', {} as LSEmail);

  const navigate = useNavigate();

  const handleChange = ({
    target: { value, id },
  }: React.ChangeEvent<HTMLInputElement>) => {
    serUser(prev => ({ ...prev, [id]: value }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEmail({ email: user.email });
    setMealsToken(DEFAULT_TOKEN);
    setCocktailsToken(DEFAULT_TOKEN);
    navigate('/foods');
  };

  useEffect(() => {
    const { email, password } = user;
    setIsDisabled(loginValidation(email, password));
  }, [user]);

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            onChange={handleChange}
            value={user.email}
            type="email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid="password-input"
            onChange={handleChange}
            value={user.password}
            type="password"
            id="password"
          />
        </label>
        <button data-testid="login-submit-btn" disabled={isDisabled} type="submit">
          Entrar
        </button>
      </form>
    </Container>
  );
};
