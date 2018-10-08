import React, { Component } from 'react';
import style from './index.css'

class Mode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };
    }
    setStatus() {
        this.state.status ? this.setState({ status: false }):this.setState({ status: true });
    }
    render() {
        const url = "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg";
        return (
            <div onClick={() => { this.setStatus() }} className={style.container}>
                <div className={style.image} style={{ backgroundImage: "url(" + url + ")" }}></div>
                <div className={this.state.status ? style.contentTrue : style.contentFalse}>居家模式</div>
            </div>
        );
    }
}

export default Mode;
