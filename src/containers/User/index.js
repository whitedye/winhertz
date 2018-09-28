import React, { Component } from 'react';
import Login from './Login';
import {
  Route,
  Switch,
} from 'react-router';
import style from './User.css';

class User extends Component {

  render() {
    return (
      <div className={ style['user-wrapper'] }>
        <Switch>
          <Route path="/user/login" exact component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default User;
