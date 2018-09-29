import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import classNames from 'classnames';

import style from './index.css';

/** 可传入的属性 */
const propTypes = {
  cls: string,
  selected: bool,
  text: string,
  onToogle: func, // 点击方法
};

class ToogleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { cls, onToogle, text } = this.props;
    const { selected } = this.state;
    return (
      <div
        className={ classNames(style.button, cls) }
        onClick={ () => this.onClick(onToogle) }>
        <div className={ classNames( style.iconOff , selected ? style.iconOn : '') }/>
        <span className={ style.text }>{ text }</span>
      </div>
    );
  }

  onClick(onToogle) {
    const nextSelected = !this.state.selected;

    this.setState({
      selected: nextSelected,
    });
    if (onToogle) { onToogle(nextSelected); }
  }
}

ToogleButton.propTypes = propTypes;

export default ToogleButton;
