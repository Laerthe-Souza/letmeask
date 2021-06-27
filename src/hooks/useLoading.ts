import { useContext } from 'react';

import { LoadingContext, LoadingContextData } from '../contexts/loading';

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  return context;
}
