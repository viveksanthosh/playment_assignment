
import PropTypes from 'prop-types';
import React from 'react';

import './ControlButtons.css';

const FilesContainer = ({ addFolder, goUpFolder }) =>
    (
        <div className="controlButtons">
        <p><b>Files</b></p>
        <button id="add" onClick={addFolder} className="btn btn-primary">Add</button>
        <button id="up" onClick={goUpFolder} className="btn btn-primary">Up</button>
      </div>
    );

FilesContainer.propTypes = {
    addFolder: PropTypes.func.isRequired,
    goUpFolder: PropTypes.func.isRequired
}

export default FilesContainer;