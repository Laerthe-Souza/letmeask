import { AppProvider } from './contexts';
import { Routes } from './routes';

import GlobalStyles from './styles/GlobalStyles';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  );
};

export default App;
