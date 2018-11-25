import * as React from "react";
import EeContext from "./context";

interface IProps {
  toggleIsFullscreen: () => void;
}

interface IState {
  currentIndex: number;
}

class Fullscreen extends React.Component<IProps, IState> {
  state = {
    currentIndex: 0
  };
  _initialIndexListener = (currentIndex: number) => {
    this.setState({
      currentIndex
    });
  };
  _shareCurrentIndex = (index: number) => {
    this.context.emit("currentIndex", index);
  };
  _incrementIndex = () => {
    this.setState(
      prevState => ({
        currentIndex: prevState.currentIndex + 1
      }),
      () => this._shareCurrentIndex(this.state.currentIndex)
    );
  };
  componentDidMount() {
    this.context.once("initialIndex", this._initialIndexListener);
    this.context.emit("fullscreenMounted", true);
  }
  componentWillUnmount() {
    this.context.off("initialIndex", this._initialIndexListener);
    this.context.emit("fullscreenMounted", false);
  }
  render() {
    return (
      <div>
        <div onClick={this._incrementIndex}>
          + Fullscreen [{this.state.currentIndex}]
        </div>
        <div onClick={this.props.toggleIsFullscreen}>[Close Fullscreen]</div>
      </div>
    );
  }
}

Fullscreen.contextType = EeContext;

export default Fullscreen;
