import React, { Component } from 'react';
import HomePage from './components/Home/homepageMain';
import Layout from './components/Layout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
          <HomePage role='main '/>

      </div>
    );
  }

}

export default App;
