import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: import.meta.env.VITE_API_URL,
      fetchOptions: {
        mode: 'cors',
      },
    })
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
