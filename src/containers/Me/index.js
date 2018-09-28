import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, List, NavBar } from 'antd-mobile';
// import history from '../../history';
import { setSelectedTab } from '../../public/action';
import listIcon from '../../assets/list_icon.jpg';
import style from './index.css';
import {  } from '../User/UserAction';

const data = {
  id: '123',
  name: '张三',
  gender: '男',
  phone: '13790900000',
  address: '上海市浦东新区',
}

const Item = List.Item;
const Brief = Item.Brief;

class Me extends Component {

  constructor(props){
    super(props);
    this.state = {
      info:{...data},
    }
    this.clickHomeItem = this.clickHomeItem.bind(this);
    this.clickUserItem = this.clickUserItem.bind(this);
    this.loginOut = this.loginOut.bind(this);
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(setSelectedTab('meTab'));
  }

  clickUserItem(){
    console.log('个人资料');
  }
  clickHomeItem(){
    console.log('我的家');
    // history.push('/roomdevice');
  }

  loginOut(){
    const { dispatch } = this.props;
    // dispatch(checkLogin(false));
    console.log('退出登录');
  }

  render(){
    console.log('我的==', this.props);
    return (
      <div className={style.content}>
        <NavBar
          mode="light"
        >我的</NavBar>
        <List>
          <Item 
            thumb={<img className={style.userIcon} src={listIcon} alt="icon"/>}            
            arrow="horizontal" 
            multipleLine 
            onClick={(e) => this.clickUserItem(e)}>
            八少<Brief>345678</Brief>
          </Item>
          <Item
            thumb={<img className={style.listIcon} src={listIcon} alt="icon"/>}
            arrow="horizontal"
            onClick={()=>this.clickHomeItem()}
          >我的家
            <Brief>家以及家庭组的管理</Brief>
          </Item>
        </List>
        
        <Button onClick={() => this.loginOut()}>退出登录</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Me);