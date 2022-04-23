import RecipesProvider from './context/RecipesContext/RecipesProvider';
import UserProvider from './context/UserContext/UserProvider';
import AppRouter from './pages/routes/index.routes';
import GlobalStyles from './styles/global';

const App = () => (
  <UserProvider>
    <RecipesProvider>
      <GlobalStyles />
      <AppRouter />
    </RecipesProvider>
  </UserProvider>
);

export default App;
