import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from "backpack-ui/dist/components/button";
import Newsletter from "backpack-ui/dist/components/newsletter";

import {StyleRoot} from 'radium';

class App extends Component {
  render() {
    return (
       <StyleRoot>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="white"/>
      <Newsletter
        title="Sign up for our weekly newsletter"
        subtitle="Get more travel inspiration, tips and exclusive offers sent straight to your inbox"
        placeholder="Enter email"
        cta="Sign up"
      />
      </div>
      </StyleRoot>
    );
  }
}

export default App;
