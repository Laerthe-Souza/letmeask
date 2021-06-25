import { AuthProvider } from './hooks/useAuth';
import { Routes } from './routes';

import GlobalStyles from './styles/GlobalStyles';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
};

export default App;
