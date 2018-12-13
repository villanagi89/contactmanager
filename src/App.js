import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manger" />
        <Contact name="John Doe" email="gmail" phone="1212121" />
        <Contact name="Jane Doe" email="hotmail" phone="111111" />
      </div>
    );
  }
}

export default App;
