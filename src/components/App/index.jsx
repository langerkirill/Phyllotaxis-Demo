import React from "react";
import P5Wrapper from "../P5Wrapper/";
import InfoBox from './info_box';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { status: "", size: 5, angle: 137.5, speed: 150, hue: 150, value: null, random:false, shape:'point', info: false  };
    this.handleClick = this.handleClick.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleIHover = this.handleIHover.bind(this);
  }

  getValue = (value) => this.setState({ value });

  onReady = () => this.setState({ status: "ready" });

  onSliderChange = (field) =>
    (event) => {
      this.setState({ [field]: +event.target.value });
    }

  handleClick () {
    let bool = !this.state.random;
    this.setState({random: bool});
  }

  handleIHover () {
    let bool = !this.state.info;
    this.setState({info: bool});
  }

  updateField(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {

    const infoHover = () => {
      if (this.state.info) {
        return (<InfoBox />);
      } else {
        return (<div></div>);
      }
    }
    // <div className="header">Phyllotaxis Visualization</div>

    return (
      <div className="app-box">
        <div className="header">Phyllotaxis Visualization</div>
        <div className="app">
          <div className="info-box">
            <div className="i-box" onMouseEnter={this.handleIHover} onMouseLeave={this.handleIHover}>
              {infoHover()}
              <i className="info material-icons">&#xe88f;</i>
            </div>
            <a href="https://www.linkedin.com/in/kirill-langer-6b292299/"><p>linkedIn</p></a>
            <div style={{ textAlign: "center" }}>
              <a href="https://github.com/langerkirill/Phyllotaxis-Demo">
                <p>GitHub</p>
              </a>
            </div>
            <p>Click on the screen to reset the pattern</p>
          </div>
          <P5Wrapper
            p5Props={{ size: this.state.size, angle: this.state.angle, speed: this.state.speed, hue: this.state.hue, random: this.state.random, shape: this.state.shape }}
            getValue={this.getValue}
            onReady={this.onReady}
          />
        <section className="knobs">
          <div className="sliders" style={{ textAlign: "center" }}>
            <strong>{this.state.size}</strong>
            <br />
            <input type="range"
              min={5} max={290} step={1}
              value={this.state.size}
              style={{ width: "90%", maxWidth: "900px" }}
              onChange={this.onSliderChange('size')}
            />
            <p style={{ textAlign: "center" }}>
              Adjust size
            </p>
          </div>
          <div className="sliders" style={{ textAlign: "center" }}>
            <strong>{this.state.angle}</strong>
            <br />
            <input type="range"
              min={5} max={290} step={0.5}
              value={this.state.angle}
              style={{ width: "90%", maxWidth: "900px" }}
              onChange={this.onSliderChange('angle')}
            />
            <p style={{ textAlign: "center" }}>
              Adjust angle
            </p>
          </div>
          <div className="sliders" style={{ textAlign: "center" }}>
            <strong>{this.state.speed}</strong>
            <br />
            <input type="range"
              min={5} max={290} step={1}
              value={this.state.speed}
              style={{ width: "90%", maxWidth: "900px" }}
              onChange={this.onSliderChange('speed')}/>
              <p style={{ textAlign: "center" }}>
                Adjust speed
              </p>
          </div>
          <div className="sliders" style={{ textAlign: "center" }}>
            <strong>{this.state.hue}</strong>
            <br />
            <input type="range"
              min={5} max={290} step={1}
              value={this.state.hue}
              style={{ width: "90%", maxWidth: "900px" }}
              onChange={this.onSliderChange('hue')}
            />
            <p style={{ textAlign: "center" }}>
              Adjust hue
            </p>
          </div>
            <div>
              <div style={{ textAlign: "center" }}>
                <br />
                <button
                  value={this.state.random}
                  style={{ width: "90%", maxWidth: "900px" }}
                  onClick={this.handleClick}>
                  <span className="blue">R</span>
                  <span className="red">a</span>
                  <span className="orange">n</span>
                  <span className="blue">d</span>
                  <span className="green">o</span>
                  <span className="red">m</span>
                  <span className="blue"> </span>
                  <span className="red">C</span>
                  <span className="orange">o</span>
                  <span className="blue">l</span>
                  <span className="green">o</span>
                  <span className="red">r</span>
                  <span className="blue">s</span>
                </button>
              </div>
              <label> <br/>
                <select className="shape-input" value={this.state.shape} onChange={this.updateField('shape')}>
                  <option selected="selected" value="point">Point</option>
                  <option value="circle">Circle</option>
                  <option value="square">Square</option>
                  <option value="triangle">Triangle</option>
                </select>
              </label>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
