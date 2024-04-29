import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  </React.StrictMode>,
)
