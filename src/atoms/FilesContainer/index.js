
import PropTypes from 'prop-types';
import React from 'react';

import './FilesContainer.css';

const FilesContainer = ({ files }) =>
    (
        <div className="container">
            {files.map(file => (
                <div key={file} className="element" ><p>{file}</p></div>
            ))}
        </div>
    );

FilesContainer.propTypes = {
    files: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FilesContainer;