import React, { Component } from 'react';


import Header from './components/Header';
import Contacts from './components/Contacts';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="REACT CONTACT MANAGER"/>
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
