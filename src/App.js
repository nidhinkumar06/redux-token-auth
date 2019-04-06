import React, { Component } from 'react';
import './App.css';
import {
  Router,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ListDetailPage from './components/ListDetailPage';
import ListPage from './components/ListPage';
import SignInPage from './components/SignInPage';
// import { generateRequireSignInWrapper } from 'redux-token-auth';
//
// const requireSignIn = generateRequireSignInWrapper({
//   redirectPathIfNotSignedIn: '/signin',
// })

const history = createBrowserHistory({})

const Routes = () => (
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={ListPage} />
      <Route path="/detail/:id" exact={true} component={ListDetailPage} />
      <Route path="/signin" component={SignInPage} />
    </div>
  </Router>
)


class App extends Component {
  render() {
    return (
       <Routes/>
    );
  }
}

export default App;
