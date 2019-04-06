import React, { Component } from 'react';
import { connect } from 'react-redux'
import { registerUser } from '../redux/actions/redux-token-auth-config'

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitForm (e) {
    e.preventDefault()
    const { registerUser } = this.props
    const {
      email,
      firstName,
      password,
    } = this.state;
    registerUser({email, firstName, password}).then((response) => {
      console.log('response', response);
    }).catch((error) => {
      console.log('error is', error);
    });
  }

  render() {
    const { submitForm } = this;
    return (
      <form onSubmit={submitForm}>
        <input type="text"/>
        <input type="text"/>
      </form>
    );
  }

}

export default connect(
  null,
  { registerUser },
)(RegisterScreen);
