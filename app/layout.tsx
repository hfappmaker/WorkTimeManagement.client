'use client'
import React from "react"
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import { SessionProvider } from "next-auth/react"
// import type { Metadata } from 'next'

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

import { ReactNode } from 'react';

const NextAuthProvider = ({ children }: { children: ReactNode }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

// export const metadata: Metadata = {
//   title: '勤怠管理システム',
//   description: '勤怠管理システムです。',
// }


export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <React.StrictMode>
            <NextAuthProvider>
              <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools />
              </QueryClientProvider>
            </NextAuthProvider>
          </React.StrictMode>
        </div>
      </body>
    </html>
  )
}