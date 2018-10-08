import React, { Component } from 'react';
import { Badge } from 'antd-mobile'
import style from './index.css'

class RoomArea extends Component {
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
            <div onClick={() => { this.setStatus() }} style={{ height: "80px", width: "100px" }}>
                <Badge dot className={this.state.status ? style.amBadgeDotTrue : style.amBadgeDotFalse}>
                    <div className={this.state.status ? style.containerTrue : style.containerFalse}>
                        <div className={style.image} style={{ backgroundImage: "url(" + url + ")" }}></div>
                        <div className={this.state.status ? style.contentTrue : style.contentFalse}>客厅</div>
                    </div>
                </Badge>
            </div>
        );
    }
}

export default RoomArea;
