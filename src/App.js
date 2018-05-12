import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SideBar from './atoms/Sidebar';
import ControlButtons from './atoms/ControlButtons';
import ShowPath from './atoms/ShowPath';
import * as folderActions from './actions/FolderActions'
import * as generalActions from './actions/GeneralActions'
import FilesContainer from './atoms/FilesContainer';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.addFolder = this.addFolder.bind(this);
    this.goUpFolder = this.goUpFolder.bind(this);
    this.onFolderClick = this.onFolderClick.bind(this);
  }

  addFolder() {
    let name = prompt("Folder Name");
    if (name) {
      let sure = true;
      if (this.props.folders.indexOf(name) !== -1) {
        sure = window.confirm(`Override folder ${name}`)
      }
      if (sure) {
        this.props.folderActions.addFolder(name, this.props.path);
      }
    }
  }

  onFolderClick(name) {
    let newPath = `${this.props.path}/${name}/`;
    newPath = newPath.split('//').join('/');
   
    this.props.folderActions.updateFolders(newPath);
  }

  goUpFolder() {
    if (this.props.path === './') {
      this.props.generalActions.error('Already at the topmost folder')
    } else {
      let { path } = this.props;
      path = path.split('/').filter(p => (p !== '' && p !== '.'));
      path.pop();
      path = './' + path.join('/');
      this.props.folderActions.updateFolders(path);
    }
  }

  render() {
    return (
      <Fragment>
        <SideBar />
        <div className="main">
          <ControlButtons addFolder={this.addFolder} goUpFolder={this.goUpFolder} />
        <ShowPath path={this.props.path} />
          <hr />
          <FilesContainer onFolderClick={this.onFolderClick} files={this.props.folders} />
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
  return {
    folderActions: bindActionCreators(folderActions, dispatch),
    generalActions: bindActionCreators(generalActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
