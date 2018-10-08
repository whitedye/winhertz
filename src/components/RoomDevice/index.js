import React, { Component } from 'react';
import { Button } from 'antd-mobile'
import style from './index.css'

class RoomDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    };
  }
  setStatus() {
    this.state.status ? this.setState({ status: false }) : this.setState({ status: true })
  }
  render() {
    const url = "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg";
    return (
      <div>
        <Button onClick={()=>{this.setStatus()}} className={this.state.status ? style.btnTrue : style.btnFalse}>
          <div className={style.image} style={{ backgroundImage: "url(" + url + ")" }}></div>
        </Button>
      </div>
    );
  }
}

export default RoomDevice;
