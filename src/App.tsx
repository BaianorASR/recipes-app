import UserProvider from './context/UserContext/UserProvider';
import AppRouter from './pages/routes/index.routes';

const App = () => (
  <UserProvider>
    <AppRouter />
  </UserProvider>
);

export default App;
