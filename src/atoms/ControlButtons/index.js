
import PropTypes from 'prop-types';
import React from 'react';

import './ControlButtons.css';

const FilesContainer = ({ addFolder, goUpFolder }) =>
    (
        <div className="controlButtons">
        <p><b>Files</b></p>
        <button onClick={addFolder} className="btn btn-primary">Add</button>
        <button onClick={goUpFolder} className="btn btn-primary">Up</button>
      </div>
    );

FilesContainer.propTypes = {
    addFolder: PropTypes.func,
    goUpFolder: PropTypes.func,
}

export default FilesContainer;