import React, { Component } from 'react';
import { Switch } from 'antd-mobile';
import style from './index.css';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }
    
    render() {
        const url = "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg";
        return (
            <div className={style.container}>
                <div className={style.head}>
                    <span>餐厅灯光</span>
                    <div style={{ backgroundImage: "url(" + url + ")" }}></div>
                </div>
                <div className={style.body} style={{ backgroundImage: "url(" + url + ")" }}></div>
                <div className={style.footer}>
                    <div className={style.switch}>
                        <Switch
                            checked={this.state.checked}
                            color="#e97951"
                            onChange={(checked) => {
                                console.log(checked);
                                this.state.checked ? this.setState({ checked: false }) : this.setState({ checked: true });                               
                            }}
                        />
                    </div>
                    <div className={style.content}>
                        <span>3</span>
                        <label>开</label>
                        <span>2</span>
                        <label>关</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;
