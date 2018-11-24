import React, { Component } from "react";
import EeContext from "./context";

class Inline extends Component {
  state = {
    fullscreenMounted: false,
    currentIndex: 0
  };
  _fullscreenMountedListener = fullscreenMounted => {
    if (fullscreenMounted) {
      this.context.emit("initialIndex", this.state.currentIndex)
    }
    this.setState({
      fullscreenMounted
    });
  };
  _currentIndexListener = currentIndex => {
    this.setState({
      currentIndex
    });
  };
  componentDidMount() {
    this.context.on("fullscreenMounted", this._fullscreenMountedListener);
    this.context.on("currentIndex", this._currentIndexListener);
  }
  componentWillUnmount() {
    this.context.off("fullscreenMounted", this._fullscreenMountedListener);
    this.context.off("currentIndex", this._currentIndexListener);
  }
  render() {
    return this.state.fullscreenMounted ? null : (
      <div onClick={this.props.toggleIsFullscreen}>
        Inline [{this.state.currentIndex}]
      </div>
    );
  }
}

Inline.contextType = EeContext;

export default Inline;
