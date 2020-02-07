import React from 'react';
import { Button, message } from 'antd';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
class App extends React.Component {
  fakeFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => message.info(JSON.stringify(json)))
      .catch(e => {
        message.info(JSON.stringify(e))
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <Button
            onClick={() => this.fakeFetch()}
          >
            Send Message
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
