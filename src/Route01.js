import React, { Component } from 'react';
//import './App.css';
const MOCK_VOLTRON_UI_SERVICE = 'http://localhost:8080';

let countJob = 5;
class Route01 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickNew = this.handleClickNew.bind(this);
  }

  handleClick() {
    fetch(`${MOCK_VOLTRON_UI_SERVICE}/jobs`)
      .then(response => response.text())
      .then(data => console.log(data));
  }

  handleClickNew() {
    fetch(`${MOCK_VOLTRON_UI_SERVICE}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `newjob${countJob++}`,
      }), // body data type must match "Content-Type" header
    })
      .then(response => response.text())
      .then(data => console.log(data));
  }

  render() {
    return (
      <header className="App-header">
        <h1>Jobs Page</h1>
        <button onClick={this.handleClick}>Get all jobs</button>
        <button onClick={this.handleClickNew}>Create new job</button>
      </header>
    );
  }
}

export default Route01;
