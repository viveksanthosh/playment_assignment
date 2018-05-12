
import PropTypes from 'prop-types';
import React from 'react';

import './ShowPath.css';

const FilesContainer = ({ path }) =>
    (
        <div className="pathContainer">
            <p>Path: {path}</p>
        </div>
    );

FilesContainer.propTypes = {
    path: PropTypes.string.isRequired
}

export default FilesContainer;