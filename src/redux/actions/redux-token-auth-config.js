import { generateAuthActions } from 'redux-token-auth';
import authUrl from '../../config/Constants';

const config = {
  authUrl: 'https://cors-anywhere.herokuapp.com/http://kp.codingtown.com/auth',
  // authUrl: 'http://c98e04a5.ngrok.io/auth',
  // userAttributes: {
  //   firstName: 'first_name',
  //   imageUrl: 'image',
  // },
  // userRegistrationAttributes: {
  //   firstName: 'first_name',
  // },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}
