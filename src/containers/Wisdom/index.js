import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import style from './index.css';

class Wisdom extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div className={style.content}>
        <Button >智能</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Wisdom);