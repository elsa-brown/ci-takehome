import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo';
import 'tachyons';
import './index.css';

const networkInterface = createNetworkInterface({
  uri: 'https://antserver-blocjgjbpw.now.sh/graphql'
});

const client = new ApolloClient({networkInterface})

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>,
  document.getElementById('app')
);
