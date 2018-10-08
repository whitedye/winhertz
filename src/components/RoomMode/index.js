import React, { Component } from 'react';
import style from './index.css'
import saloon from './Img/saloon.png'

class RoomMode extends Component {
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
    return (
      <div onClick={() => { this.setStatus() }} className={style.container} style={{ backgroundImage: "url(" + saloon + ")" }}>
        <div className={this.state.status ? style.contentTrue : style.contentFalse}>
          <span className={this.state.status ? style.ctSpanTrue : style.ctSpanFalse}>客厅</span>&nbsp;&nbsp;&nbsp;
          <label className={this.state.status ? style.ctLabelTrue : style.ctLabelFalse}>迎宾模式</label>
        </div>
      </div>
    );
  }
}

export default RoomMode;
