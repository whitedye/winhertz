import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import style from './index.css';

class Room extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
    this.clickHome = this.clickHome.bind(this);
  }

  clickHome(){
    console.log('dinjie');
  }

  render(){
    return (
      <div className={style.content}>
        <Button onClick={() => this.clickHome}>房间</Button>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Room);