import React, { Component } from 'react';
import HomePage from './components/Home/homepageMain';
import Layout from './components/Layout';
import Login from './LoginPage';
import Loading from './Loading';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      isLoading: false
    };
  }
  render() {
    if (this.state.isLoading === true) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    else if (this.state.isLoading === false && this.state.isAuthenticated === false) {
      return (
        <div>
          <Login />
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <Layout />
          <HomePage role='main ' />
        </div>
      );
    }
  }

}

export default App;
