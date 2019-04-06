import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './redux/store';
// import configureStore from './redux/configure-store'
import { verifyCredentials } from './redux/actions/redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module

// const store = configureStore()
console.log('store is', store);
verifyCredentials(store); // <-<-<-<-<- here's the important part <-<-<-<-<-
console.log('verifyCredentials', verifyCredentials(store));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
 );


serviceWorker.unregister();
