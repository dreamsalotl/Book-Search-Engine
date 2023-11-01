import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client'; // Import ApolloProvider
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql', // Replace with the correct GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}> {/* Wrap your entire app with ApolloProvider */}
      <>
        <Navbar />
        <Outlet />
      </>
    </ApolloProvider>
  );
}

export default App;