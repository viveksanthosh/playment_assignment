import React, { Component, Fragment } from 'react';
import SideBar from './atoms/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <SideBar />
        <div className="main">
          <div className="controlButtons">
          <p><b>Files</b></p>
            <button className="btn btn-primary">Add</button>
            <button className="btn btn-primary">Up</button>
          </div>
          <div className = "pathContainer">
          <p>../../../fmnkm.//ef</p>
          </div>
          <div className="container">
            <div className="element" ><p>3 </p></div>
            <div className="element" ><p>3 </p></div>
            <div className="element" ><p>3 </p></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
