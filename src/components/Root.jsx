import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import AxiosProvider from './provider/AxiosProvider';

import App from './App';

const queryClient = new QueryClient();

const Root = () => {
  return (
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <AxiosProvider> 
          <BrowserRouter>
            <App />
            <ReactQueryDevtools />
          </BrowserRouter>
          </AxiosProvider>
        </QueryClientProvider>
    </React.StrictMode>
  )
}

export default Root;
