import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../sort';

const DirectoryHeader = (props) => {
    return (
        <React.Fragment>
            <div className="directory-container-header">
                <div class="d-flex flex-row justify-content-between">
                    <div className="mt-2">{props.charactersLength} Charater(s) found.</div>
                    <Sort />
                </div>
            </div>
        </React.Fragment>
    )
}

DirectoryHeader.prototype = {
    charactersLength: PropTypes.number.isRequired
}

export default DirectoryHeader;
