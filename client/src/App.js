import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Credits from './pages/Credits';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Captain from './pages/Captain';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import CaptCreation from './components/CaptCreation';
import CrewCreation from './components/CrewCreation';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start">
          <Header />
          <div className="container-main">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
              path="/credits"
              element={<Credits />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/me"
                element={<Profile />}
              />
              <Route
                path="/profiles/:username"
                element={<Profile />}
              />
              <Route
                path="/captains/:captainId"
                element={<Captain />}
              />
              <Route
                path="/CaptCreation"
                element={<CaptCreation />}
              />
              <Route
              path='/CrewCreation'
              element={<CrewCreation />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;