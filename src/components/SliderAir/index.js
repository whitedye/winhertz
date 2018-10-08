import React, { Component } from "react";
import { Slider } from "antd-mobile";
import style from "./index.css";
import add from "./Img/add.png";
import reduce from "./Img/reduce.png";

class SliderAir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    return (
      <div className={style.container}>
        <div
          className={style.reduceDiv}
          onClick={() => {
            if (this.state.value > 0) {
              this.setState({ value: this.state.value - 1 }, () => {
                console.log(this.state.value);
              });
            }
          }}
        >
          <img src={reduce} style={{ height: "30px", width: "30px" }} />
        </div>
        <Slider
          style={{ marginLeft: 60, marginRight: 60 }}
          defaultValue={0}
          min={0}
          max={100}
          value={this.state.value}
          onChange={(value) => {
            this.setState({ value: value });
          }}
          onAfterChange={(value) => {
            console.log(value);
          }}
          handleStyle={{
            border: "1px solid #d9d9d9",
            height: "31px",
            width: "32px",
            marginTop: "-13px",
            boxShadow: "1px 1px 1px #b6b6b6 inset"
          }}
          trackStyle={{
            backgroundColor: "#d7ecf6",
            height: "4px"
          }}
          railStyle={{
            backgroundColor: "#cbcbcb",
            height: "4px"
          }}
        />
        <div
          className={style.addDiv}
          onClick={() => {
            if (this.state.value < 100) {
              this.setState({
                value: this.state.value + 1
              }, () => {
                console.log(this.state.value);
              });
            }
          }}
        >
          <img src={add} style={{ height: "30px", width: "30px" }} />
        </div>
      </div>
    );
  }
}

export default SliderAir;
