import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './index.css';

class RoomDevice extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div className={style.content}>
        房间设备
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(RoomDevice);