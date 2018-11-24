import React, { Component } from "react";
import "./App.css";

import Inline from "./Inline";
import Fullscreen from "./Fullscreen";

class App extends Component {
  state = {
    isFullscreen: false
  };
  _toggleIsFullscreen = () => {
    this.setState(prevState => ({
      isFullscreen: !prevState.isFullscreen
    }));
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <Inline toggleIsFullscreen={this._toggleIsFullscreen} />
          {this.state.isFullscreen ? (
            <Fullscreen toggleIsFullscreen={this._toggleIsFullscreen} />
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
