import React from 'react';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Player from './components/Player';
import Search from './components/Search';
import configStore from './store';
import Routes from './routes';

const store = configStore();

const client = new ApolloClient({
  uri: 'http://sleek.warukira.me'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Provider store={store}>
          <div className="page-wrapper">
            <Header />
            <Sidebar />
            <Routes />
            <Player />
          </div>
        </Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
