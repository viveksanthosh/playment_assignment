import React, { Component, Fragment } from 'react';
import SideBar from './atoms/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <SideBar />
        <div className="container">
          <div className="element" ><p>3 </p></div>
          <div className="element" ><p>3 </p></div>
          <div className="element" ><p>3 </p></div>
  
        </div>
      </Fragment>
    );
  }
}

export default App;
