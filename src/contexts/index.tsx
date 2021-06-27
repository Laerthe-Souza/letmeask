import { AuthProvider } from './auth';
import { LoadingProvider } from './loading';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <AuthProvider>{children}</AuthProvider>
    </LoadingProvider>
  );
};
