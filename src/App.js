import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SideBar from './atoms/Sidebar';
import * as folderActions from './actions/FolderActions'
import * as generalActions from './actions/GeneralActions'
import FilesContainer from './atoms/FilesContainer';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.addFolder = this.addFolder.bind(this);
    this.onFolderClick = this.onFolderClick.bind(this);
  }

  addFolder(){
    let name = prompt("Folder Name");
    this.props.folderActions.addFolder(name, this.props.path);
  }

  onFolderClick(name){
    let newPath = `${this.props.path}/${name}`;
    newPath.replace('//', '/');
    this.props.folderActions.updateFolders(`${this.props.path}${name}`);
  }

  goUpFolder(){
    if(this.props.path === './'){
      this.props.generalActions.error('Already at the topmost folder')
    }
  }

  render() {
    return (
      <Fragment>
        <SideBar />
        <div className="main">
          <div className="controlButtons">
            <p><b>Files</b></p>
            <button onClick = {this.addFolder} className="btn btn-primary">Add</button>
            <button className="btn btn-primary">Up</button>
          </div>
          <div className="pathContainer">
            <p>{this.props.path}</p>
          </div>
          <FilesContainer onFolderClick = {this.onFolderClick} files={this.props.folders} />
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
  return { folderActions: bindActionCreators(folderActions, dispatch),
    generalActions: bindActionCreators(generalActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
