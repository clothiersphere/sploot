import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      key: '',
      megalink: '',
      decryptionKey: '',
    };
  }

  // <img src={logo} className="App-logo" alt="logo" />

  render() {
    const { megalink, decryptionKey } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Sploot Megalink Utility Tool
          </h1>
        </header>
        <Input placeholder="megalink" value={megalink} />
        <Input placeholder="decryption key" value={decryptionKey} />
        <Button>
          generate link
        </Button>
      </div>
    );
  }
}

export default App;
