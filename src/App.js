import React, { Component } from 'react';

import Header from "./components/blocks/Header/Header";

import { Feed } from "./components/pages";
import Copyright from "./components/blocks/Copyright/Copyright";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header notification={true} />
        <div className="Content">
          <Feed/>
        </div>
        <Copyright/>
      </div>
    );
  }
}

export default App;
