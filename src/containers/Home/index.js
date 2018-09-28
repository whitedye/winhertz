import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

import { getData } from './HomeAction';
import style from './index.css';


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      userInfo: {},
    }
    this.getHomeData = this.getHomeData.bind(this);
  }

  getHomeData(){
    const { dispatch } = this.props;
    dispatch(getData());
  }

  render(){
    return(
      <div className={style.content}>
        <Button onClick={ () => this.getHomeData() }>首页</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  state,
})

export default connect(mapStateToProps)(Home);