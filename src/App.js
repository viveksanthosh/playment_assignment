import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SideBar from './atoms/Sidebar';
import * as folderActions from './actions/FolderActions'
import FilesContainer from './atoms/FilesContainer';
import './App.css';

export class App extends Component {
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
          <div className="pathContainer">
            <p>{this.props.path}</p>
          </div>
          <FilesContainer files={["1", "2", "34"]} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
    folders: state.folderData.folders,
    path: state.folderData.path
  })

const mapDispatchToProps = dispatch => {
  return { folderActions: bindActionCreators((folderActions, dispatch)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
