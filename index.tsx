import axios from 'axios';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// Define a default query function that will receive the query key
// const defaultQueryFn = async ({ queryKey }) => {
//   const { data } = await axios.get(
//     `https://61b88c9d64e4a10017d19053.mockapi.io/user`
//   );
//   return data;
// };

// // provide the default query function to your app with defaultOptions
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchInterval: 10000000,
//       queryFn: defaultQueryFn,
//     },
//   },
// });
const queryClient = new QueryClient();
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
