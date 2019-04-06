import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      console.log('authUser check in hoc', this.props.authUser);
      if (!this.props.authUser.isSignedIn && !this.props.authUser.isLoading) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return this.props.authUser ? <Component {...this.props} /> : null;
    }
  }

  const mapStateToProps = (state) => ({
    authUser: state.reduxTokenAuth.currentUser
  });

  return compose(
    withRouter,
    connect(mapStateToProps)
  )(WithAuthorization);
};

export default withAuthorization;
