import React from 'react';

export default class SignUpOrSignIn extends React.Component {
  render() {
    return (
      <main className='add-new-meal-or-exercise'>
        <a href='#createAccount'>Create Account</a>
        <a href='#signIn'>Sign In</a>
      </main>
    );
  }
}
