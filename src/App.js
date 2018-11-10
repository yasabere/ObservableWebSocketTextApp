import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Messages from "./Messages/ConnectedMessages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Messages />
        </header>
      </div>
    );
  }
}

export default App;
