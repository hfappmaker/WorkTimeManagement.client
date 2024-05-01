import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        retry: false,
        refetchOnWindowFocus: false,
    },
    mutations: {
        retry: false
    }
}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Login />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
