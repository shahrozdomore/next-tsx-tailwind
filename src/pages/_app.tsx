import { AppProps } from "next/app";
import "@/assets/css/tailwind.css";
// import "../styles/global.scss";

// import { ApolloClient, InMemoryCache } from '@apollo/client';
// const client = new ApolloClient({
//   uri: '/api/graphql',
//   cache: new InMemoryCache(),
// });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
