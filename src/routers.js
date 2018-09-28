import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './containers/Home';
import Me from './containers/Me';
import Room from './containers/Room';
import Wisdom from './containers/Wisdom';
import User from './containers/User';

const routers = (user) => (
  <Switch>
    <Route path="/home" exact component={ Home }/>
    <Route path="/room" exact component={ Room }/>    
    <Route path="/wisdom" exact component={ Wisdom }/>     
    <Route path="/user" component={ User } />
    <PrivateRoute path="/me" data={user} component={ Me }/>
  </Switch>
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user: { isLogin}  } = rest.data;
  return (
    <Route { ...rest } render = { (props) => (
      isLogin ? 
        <Component {...props} /> :  
        <Redirect to={ {
          pathname: '/user/login',
          state: { from: props.location.pathname },
        } } />
    )}/>
  )
}

export default routers;
