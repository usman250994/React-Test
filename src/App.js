import React, { Component } from 'react';
import Dashboard from './components/dashboard';
import MyProvider from './contextAPI/my-provider'
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyProvider>
          <Dashboard/>
        </MyProvider>
      </div>
    );
  }
}

export default App;
