import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
//import './App.css';
import Route01 from './Route01';
import Route02 from './Route02';

class App_ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Link to="/react_page01">Jobs</Link>
        <Link to="/react_page02">Scripts</Link>
        <Switch>
          <Route component={Route01} path="/react_page01" />
          <Route component={Route02} path="/react_page02" />
        </Switch>
      </div>
    );
  }
}

export default App_;
