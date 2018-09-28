import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import { connect} from 'react-redux';
// import logo from '../assets/logo.svg';
import style from './App.css';
import Main from './Main/Main';


class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Router history={ history }>
          <Route path="/" component={ Main } />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sysTab: state.sysTab,
});
export default connect(mapStateToProps)(App);
