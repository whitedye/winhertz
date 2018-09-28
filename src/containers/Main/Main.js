import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import NavMenu from '../../components/NavMenu';
// import TabBar from '../../components/TabBar/TabBar';
import MeRouter from '../../routers';
import style from './Main.css';

const tabs = [
  { id: 'home', link: '/home', icon: 'home', text: '我的家' },
  { id: 'room', link: '/room', icon: 'room', text: '房间' },
  { id: 'wisdom', link: '/wisdom', icon: 'wisdom', text: '智能' },
  { id: 'me', link: '/me', icon: 'me', text: '我的' },
];

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {}
    
  }

  render() {
    const { sysTab, user, dispatch } = this.props;
    // const pathname = location.pathname;
    // const showTabbarPathArr = ['/', '/home', '/room', '/wisdom', '/me'];
    // const showTabbar = (showTabbarPathArr.indexOf(pathname) >= 0);
    return (
      <div className={ style.app }>
        <div className={ classNames(style['sf-container'], style['with-tabbar']) }>
          <MeRouter user={ user }/>
        </div>
        {
          // showTabbar ?
            <NavMenu dispatch={dispatch} sysTab={sysTab} tabs={tabs}/> 
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sysTab: state.sysTab,
  user: state.user,
});

export default connect(mapStateToProps)(Main);
