
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import history from '../../history';

import { setSelectedTab } from '../../public/action';
import style from './index.css';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    
    this.loadTab = this.loadTab.bind(this);
  }
  loadTab (tab) {
    const { dispatch } = this.props;
    console.log('shuj==', this.props);
    switch(tab){
      case 'homeTab': {
        dispatch(setSelectedTab(tab));
        history.replace('/home');
        break;
      }
      case 'roomTab': {
        dispatch(setSelectedTab(tab));
        history.replace('/room');
        break;
      }
      case 'wisdomTab': {
        dispatch(setSelectedTab(tab));
        history.replace('/wisdom');
        break;
      }
      case 'meTab': {
   
        dispatch(setSelectedTab(tab));
        history.replace('/me');
        
        break;
      }
      default: 
        break;
    }
  }

  render() {
    const { sysTab, tabs } = this.props;
    return (
      <div className={style.tabbar} style={{ position: "fixed", width: "100%", bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          prerenderingSiblingsNumber={0}
          hidden={sysTab.hidden}
        >
          {
            tabs.map(tab => {
              return (
                <TabBar.Item
                  title={tab.text}
                  key={tab.id}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selected={sysTab.selectedTab === `${tab.id}Tab`}
                  onPress={() => {
                    this.loadTab(`${tab.id}Tab`)
                  }}
                />
              )
            })
          }
        </TabBar>
      </div>
    );
  }
}

export default NavMenu;
NavMenu.propTypes = {
  tabs: PropTypes.array.isRequired,
}