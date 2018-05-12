
import PropTypes from 'prop-types';
import React from 'react';

import './FilesContainer.css';

const FilesContainer = ({ files, onFolderClick }) =>
    (
        <div className="container">
            {files.map(file => (
                <div key={file} onClick={() => onFolderClick(file)} className="element" ><p>{file}</p></div>
            ))}
        </div>
    );

FilesContainer.propTypes = {
    files: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFolderClick: PropTypes.func
}

export default FilesContainer;