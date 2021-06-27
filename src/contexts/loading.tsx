import { useCallback, useState, createContext } from 'react';

import { Loading } from '../components/Loading';

export type LoadingContextData = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

export const LoadingContext = createContext({} as LoadingContextData);

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}

      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
};
