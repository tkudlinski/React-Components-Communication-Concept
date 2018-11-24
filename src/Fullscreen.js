import React, { Component } from 'react';
import EeContext from './context'

class Fullscreen extends Component {
  state = {
    currentIndex: 0,
  };
  _initialIndexListener = (currentIndex) => {
    this.setState({
      currentIndex,
    })
  }
  _shareCurrentIndex = (index) => {
    this.context.emit('currentIndex', index)
  }
  _incrementIndex = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1
    }), () => this._shareCurrentIndex(this.state.currentIndex))
  }
  componentDidMount() {
    this.context.once("initialIndex", this._initialIndexListener)
    this.context.emit('fullscreenMounted', true)
  }
  componentWillUnmount() {
    this.context.off("initialIndex", this._initialIndexListener)
    this.context.emit('fullscreenMounted', false)
  }
  render() {
    return (
      <div>
        <div onClick={this._incrementIndex} >+ Fullscreen [{this.state.currentIndex}]</ div>
        <div onClick={this.props.toggleIsFullscreen}>[Close Fullscreen]</div>
      </div>
    );
  }
}

Fullscreen.contextType = EeContext;

export default Fullscreen;
