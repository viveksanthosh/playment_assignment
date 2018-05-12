
import PropTypes from 'prop-types';
import React from 'react';

import './FilesContainer.css';

const FilesContainer = ({ files, onFolderClick }) =>
    (
        <div className="container">
            {files.length === 0 ?
                <div className="element" ><p>Folder is Empty</p></div>
                :
                files.map(file => (
                    <div key={file} onClick={() => onFolderClick(file)} className="element" ><p>{file}</p></div>
                ))}
        </div>
    );

FilesContainer.propTypes = {
    files: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFolderClick: PropTypes.func.isRequired
}

export default FilesContainer;