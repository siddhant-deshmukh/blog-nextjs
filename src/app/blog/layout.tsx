"use client"

import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
// import { ReactQueryDevtools } from "react-query/types/devtools";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
        keepPreviousData: true
      },
    }
  });

  if (typeof window === "undefined") {
    return <div>Meow</div>
  }

  const localStoragePersistor = createWebStoragePersistor({ storage: window?.localStorage })

  persistQueryClient({
    queryClient,
    persistor: localStoragePersistor,
  })



  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
