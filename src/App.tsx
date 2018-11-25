import * as React from "react";
import "./App.css";

import Inline from "./Inline";
import Fullscreen from "./Fullscreen";

interface IState {
  isFullscreen: boolean;
}

class App extends React.Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isFullscreen: false
    };
  }
  _toggleIsFullscreen = () => {
    this.setState(prevState => ({
      isFullscreen: !prevState.isFullscreen
    }));
  };
  render() {
    return (
      <div>
        <header className="App-content">
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
