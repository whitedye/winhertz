import React, { Component } from 'react';
import style from './index.css'

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherStatus: "晴转多云",
            place: "上海",
            temperature: "26℃"
        };
    }

    render() {
        const url = "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg";
        return (
            <div className={style.container}>
                <div className={style.image} style={{ backgroundImage: "url(" + url + ")" }}></div>
                <div className={style.content}>{this.state.weatherStatus}</div>
                <div className={style.footer}>
                    <div className={style.left}></div>
                    <div className={style.right}>
                        {this.state.place}&nbsp;{this.state.temperature}
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;
