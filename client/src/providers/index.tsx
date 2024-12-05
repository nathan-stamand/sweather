import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";
import { typeDefs } from "../graphql/typeDefs";
import { CurrentLocationProvider } from "./current-location";
import { SettingsProvider } from "./settings";

export const Providers = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    typeDefs,
    link: new HttpLink({
      uri: import.meta.env.VITE_API_URL,
      fetchOptions: {
        mode: 'cors',
      },
    })
  });

  return (
    <ApolloProvider client={client}>
      <CurrentLocationProvider>
        {children}
      </CurrentLocationProvider>
    </ApolloProvider>
  )
}
