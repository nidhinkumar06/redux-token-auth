import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthorization from '../hoc/withAuthorization';
import Constants from '../config/Constants';
import { signOutUser } from '../redux/actions/redux-token-auth-config';
import axios from 'axios';

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  gotoDetailPage = (selectedDataId) => {
    console.log('data is', selectedDataId);
    this.props.history.push(`/detail/${selectedDataId}`);
  }

  signOut = (e) => {
    console.log('signOut got called');
    e.preventDefault();
    const { signOutUser } = this.props;
    signOutUser().then((resp) => {
      console.log('this.props', this.props);
      this.props.history.push('/signin');
    }).catch((error) => {
      console.log('signout error is', error);
    });
  }

  render() {
     const { signOut } = this;
    return (
      <div>
        <h3>List Page</h3>
        <a href="" onClick={signOut}>Sign Out</a>
        {Constants.ListData.map((data, index) => {
          return (
            <div key={data.id} onClick={this.gotoDetailPage.bind(this, data.id)}>
              <h4>{index + 1}. {data.name}</h4>
              <h5>{data.address}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.reduxTokenAuth.currentUser
  };
}

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, { signOutUser })
)(ListPage);
