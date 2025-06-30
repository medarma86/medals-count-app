'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute cache
        retry: (failureCount, error) => {
          // Don't retry on 404
          if (error instanceof Error && error.message.includes('404')) {
            return false;
          }
          return failureCount < 3; // Retry up to 3 times
        },
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    {/* {process.env.NODE_ENV === 'development' && (      // best practice to use this in dev env only
        <ReactQueryDevtools 
          initialIsOpen={false} 
          position="bottom-right"
          toggleButtonProps={{
            style: {
              margin: '0.5rem',
              opacity: 0.9,
            },
          }}
        />
      )} */}
    </QueryClientProvider>
  );
}