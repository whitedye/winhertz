import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

import ToogleButton from '../../components/Button/ToogleButton';
import { getData } from './HomeAction';
import style from './index.css';


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      userInfo: {},
      selected: false,
    }
    this.getHomeData = this.getHomeData.bind(this);
  }

  getHomeData(){
    const { dispatch } = this.props;
    dispatch(getData());
  }

  /** 改变按钮状态 */
  onToogle(status){
    this.setState({
      selected: status,
    });
  }

  render(){
    const { selected } = this.state;
    return(
      <div className={style.content}>
        <Button onClick={ () => this.getHomeData() }>首页</Button>

        <ToogleButton selected={selected} text="制冷" onToogle={(status) => this.onToogle(status)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  state,
})

export default connect(mapStateToProps)(Home);